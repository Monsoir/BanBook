import { BaseURL, ISBNURL } from '../const/serviceConst';

export default class Fetcher {
  static fetchFrom(url) {
    return fetch(url)
            .then(response => {
                return response.json();
            })
            .then((responseData) => {
                return responseData;
            });
  }

  static fetchByISBN(isbn) {
    const url = `${BaseURL}${ISBNURL}${isbn}`;
    return this.fetchFrom(url);
  }
}
