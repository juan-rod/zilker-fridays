import GiphyRepository from './Repository'
export default {
  getGiphy: () => GiphyRepository.getGiphy(),
  getGiphySearch: (searchTerm) => GiphyRepository.getGiphySearch(searchTerm)
}