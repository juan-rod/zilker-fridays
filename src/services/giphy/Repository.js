// import httpClient from '@/services/http/httpClient'
import { GiphyFetch } from '@giphy/js-fetch-api'

const apiKey = 'HerlR6x6xKJl879LGeaEqSsj4gu6Ddv9'
const offset = 0

const getGiphy = () => {
  try {
    return new GiphyFetch(apiKey)
  } catch (err) {
    console.error('err', err)
  }
}
const getGiphySearch = async (searchTerm) => {
  const gf = getGiphy()
  let { data } = await gf.search(searchTerm, { offset: offset , limit: 5 })
  return data
}
export default { getGiphy, getGiphySearch }
