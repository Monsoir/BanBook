# BanBook Memo

```js
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
```

## TextInput

### 设置 TintColor

设置光标颜色属性

`selectionColor`

## 获取窗体尺寸

`var {height, width} = Dimensions.get('window');`

