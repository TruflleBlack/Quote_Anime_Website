import excerpts from './excerpts.js'

class DataSource {
    static searchExcerpt(keyword) {
      return fetch(`https://katanime.vercel.app/api/carikata?kata=${keyword}&page=1`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.result) {
          return Promise.resolve(responseJson.result);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;