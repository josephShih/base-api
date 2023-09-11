import knex from '../common/knex'

const daName = 'DB_NAME'

export async function queryDemoData () {
  const sql = `SELECT name, code FROM ${daName}`
  const result = await knex.selectSql(sql)
  return result
}

export default {
  queryDemoData
}
