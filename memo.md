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

### 手动设置 text 值

获取到 TextInput 的引用，假设为 input

```js
input.setNativeProps({text: 'some text'});
```

## 获取窗体尺寸

`var {height, width} = Dimensions.get('window');`

## 动态设置 react-navigation 中的控件

```js
const {setParams} = this.props.navigation;
setParams({ categoryIndex: index });
this.setState({
 categoryIndex: index,
});
```


