import '../component/excerpt-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const excerptListElement = document.querySelector('excerpt-list');
  
    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSource.searchExcerpt(searchElement.value);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };
  
    const renderResult = results => {
      excerptListElement.excerpts = results;
    };
  
    const fallbackResult = message => {
      excerptListElement.renderError(message);
    };
  
    searchElement.clickEvent = onButtonSearchClicked;
  };
  
  export default main;
  