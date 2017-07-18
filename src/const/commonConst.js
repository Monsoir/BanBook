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
 * 类别枚举
 */
const CategoryEnum = {
  id: 0,
  isbn: 1,
  keywordOrTag: 2,
  bookMostTags: 3,
  annotations: 4,
  serie: 5,
};

/**
 * 类别选择的选项
 */
const CategoryDisplayName = [
  'ID',
  'ISBN',
  '关键字/标签',
  '书籍最多标签',
  '笔记',
  '丛书',
];

/**
 * 根据类别枚举值返回类别名称
 * @param {*类别枚举值} index
 */
function categoryNameRecognizer(categoryEnum) {
  if (categoryEnum < 0 || categoryEnum > CategoryDisplayName.length) return null;
  return CategoryDisplayName[categoryEnum];
}

/**
 * 各个类别的对应输入框的 placeholder
 */
const CategoryPlaceholders = [
  '输入书籍在豆瓣上的 ID',
  '输入书籍的 ISBN 号',
  '输入书名或关键字',
  '输入书名',
  '输入书名',
  '输入丛书名称',
];

/**
 * 根据类别枚举值返回类别 placeholder
 * @param {*类别枚举值} categoryEnum
 */
function categoryPlaceholderRecognizer(categoryEnum) {
  if (categoryEnum < 0 || categoryEnum > CategoryPlaceholders.length) return null;
  return CategoryPlaceholders[categoryEnum];
}

/**
 * 选择器使用的 key value 合成器
 */
function CategoryKeyValue() {
  return CategoryDisplayName.map((value, index) => {
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
    keyword: '',
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
  CategoryEnum,
  categoryNameRecognizer,
  categoryPlaceholderRecognizer,
  MainTintColor,
  BackgroundColor,
  initialState,
};
