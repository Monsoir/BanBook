/**
 * 搜索类别
 */
const Category = {
  book: 'book', // 根据图书平台 ID 搜索图书
  isbn: 'isbn', // 根据图书 ISBN 搜索图书
  keywordOrTag: 'keywordOrTag', // 根据关键字或 tag 搜索图书
  bookMostTags: 'bookMostTags', // 图书中标记最多的标签
  annotations: 'annotations', // 获取某本图书的所有笔记
  serie: 'serie', // 获取丛书书目信息
};

/**
 * 主题颜色，如按钮字体
 */
const MainTintColor = '#2AAC5E';

/**
 * 初始状态机
 */
const initialState = {
  category: Category.book,
  modalPickerConfigs: {
    items: [],
    present: false,
  },
};

export {
  Category,
  MainTintColor,
  initialState,
};
