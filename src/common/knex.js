import Knex from 'knex'
import config from 'config'

const KNEX_CONFIG = {
  client: 'mysql',
  pool: {
    min: 0,
    max: 20
  },
  postProcessResponse: result => {
    try {
      if (result && result[0] && typeof result[0] === 'object') {
        return changeCase(result)
      }
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

async function setKnex (parameter) {
  try {
    const result = await getJSONSSM(parameter)
    KNEX_CONFIG.connection = {
      host: result.host,
      port: result.port,
      database: result.dbClusterIdentifier,
      user: result.username,
      password: result.password
    }
    return Knex(KNEX_CONFIG)
  } catch (error) {
    console.log(error)
    throw error
  }
}

let knex = null
async function getKnex () {
  try {
    if (!knex) {
      knex = await setKnex(config.DB_SLAVE_PARAMETER)
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

// --------------------------------  select --------------------------------

export async function selectSql (sql) {
  try {
    await getKnex()
    const result = await knex.raw(sql).catch(error => {
      throw error
    })

    return result[0]
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  selectSql
}
