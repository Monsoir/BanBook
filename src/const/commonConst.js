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
 * 类别选择的选项
 */
const categoryDisplayName = [
  // 'ID',
  // 'ISBN',
  // 'keywordOrTag',
  // 'bookMostTags',
  // 'annotations',
  // 'serie',
  'ID',
  'ISBN',
  '关键字/标签',
  '书籍最多标签',
  '笔记',
  '丛书',
];

/**
 * 根据下表返回类别名称
 * @param {*下标} index
 */
function categoryNameRecognizer(index) {
  if (index < 0 || index > categoryDisplayName.length) return null;
  return categoryDisplayName[index];
}

/**
 * 选择器使用的 key value 合成器
 */
function CategoryKeyValue() {
  return categoryDisplayName.map((value, index) => {
    return {
      label: value,
      value: index,
    };
  });
}

/**
 * 主题颜色，如按钮字体
 */
const MainTintColor = '#2AAC5E';

/**
 * 背景颜色
 */
const BackgroundColor = '#F6F6F6';

/**
 * 初始状态机
 */
const initialState = {
  searchConfigs: {
    categoryIndex: 0,
    items: [],
    error: null,
  },
  modalPickerConfigs: {
    title: '',
    items: [],
    present: false,
    selected: 0,
  },
};

export {
  Category,
  CategoryKeyValue,
  categoryNameRecognizer,
  MainTintColor,
  BackgroundColor,
  initialState,
};
