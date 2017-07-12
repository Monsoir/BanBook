import {
  BaseURL,
  ISBNURL,
  SearchURL,
  TagsURL,
  AnnotationsURL,
} from '../const/serviceConst';

export default class Fetcher {
  /**
   * 基础请求方法
   * @param {*请求 URL} url
   */
  static fetchFrom(url) {
    return fetch(url)
            .then(response => {
                return response.json();
            })
            .then((responseData) => {
                return responseData;
            });
  }

  /**
   * 根据 ISBN 搜索图书
   * @param {*查询书籍的 ISBN} isbn
   */
  static fetchByISBN(isbn) {
    const url = `${BaseURL}${ISBNURL}${isbn}`;
    return this.fetchFrom(url);
  }

  /**
   * 根据关键字或 tag 搜索图书
   * @param {*搜索关键字} keyword
   * @param {*搜索 tag 名字} tagName
   * @param {*取结果的 offset} start
   * @param {*取结果的条数} count
   */
  static fetchBySearch(keyword='', tagName='', start=0, count=20) {
    if (!(keyword || tagName)) return null;

    const params = {
      q: keyword,
      tag: tagName,
      start: start,
      count: count,
    };
    const queryParts = this.makeURLSearchParams(params);
    const url = `${BaseURL}${SearchURL}?${queryParts}`;
    return this.fetchFrom(url);
  }

  /**
   * 某个图书标记最多的标签
   * @param {*图书在平台上的 ID} bookID
   */
  static fetchMostTagsOfABook(bookID) {
    if (!bookID) return null;

    const url = `${BaseURL}${bookID}${TagsURL}`;
    return this.fetchFrom(url);
  }

  /**
   * 获取某本图书的所有笔记
   * @param {*图书在平台上的 ID} bookID
   * @param {*笔记返回的 content 字段格式} format
   * @param {*笔记排序方式} order
   * @param {*页码} page
   */
  static fetchBookAnnotations(bookID, format, order, page) {
    if (!bookID) return null;

    const params = {
      format: format,
      order: order,
      page: page,
    };
    const queryParts = this.makeURLSearchParams(params);
    const url = `${BaseURL}${bookID}${AnnotationsURL}?${queryParts}`;

    return this.fetchFrom(url);
  }

  /**
   * 用来拼接 GET 方法的查询字符串，不包括 ?
   * @param {*查询字符串的参数} params
   */
  static makeURLSearchParams(params) {
    if (params) {
      let queryParts = [];
      Object.keys(params).forEach((key) => {
        const queryPart = `${key}=${params[key]}`;
        queryParts = queryParts.concat(queryPart);
      });
      return queryParts.join('&');
    }

    return null;
  }
}
