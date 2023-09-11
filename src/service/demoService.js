import damoDao from '../dao/demoDao'

export async function getDemoData () {
  try {
    const data = await damoDao.queryDemoData()

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  getDemoData
}
