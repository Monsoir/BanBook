// https://developers.douban.com/wiki/?title=book_v2

/**
 * 基础 URL，获取图书信息
 */
export const BaseURL = 'https://api.douban.com/v2/book/';

/**
 * 根据 ISBN 搜索图书
 */
export const ISBNURL = 'isbn/';

/**
 * 根据关键字或 tag 搜索图书
 */
export const SearchURL = 'search';

/**
 * 某个图书中标记最多的标签
 */
export const TagsURL = '/tags';

/**
 * 获取某本图书的所有笔记
 */
export const AnnotationsURL = '/annotations';

/**
 * 笔记返回content字段格式
 */
export const AnnotationFormat = {
  text: 'text', // 伪标签格式，默认值
  html: 'html', // HTML 格式
};

/**
 * 笔记排序方式
 */
export const AnnotationOrder = {
  collect: 'collect', // 最新笔记
  rank: 'rank', // 按有用程度，默认值
  page: 'page', // 按页码先后
};

/**
 * 获取某篇笔记的信息
 */
export const AnnotationURL = 'annotation/';

/**
 * 获取丛书书目信息
 */
export const SerieURL = {
  serieURL: function(serieID) {
    return `series/${serieID}/books`;
  },
};
