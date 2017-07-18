import React, {
  PureComponent,
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  FlatList,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import * as InitialPageActionCreators from '../actions/initialPage/actionCreators';
import * as ModalPickerActionCreators from '../actions/modalPicker/actionCreators';

import { getWindowWidth } from '../utils/commonUtils'; 
import {
  MainTintColor,
  BackgroundColor,
  CategoryKeyValue,
  CategoryEnum,
  categoryNameRecognizer,
  categoryPlaceholderRecognizer,
} from '../const/commonConst';
import ModalPicker from './accessory/modalPicker';
import BanBookCell from './accessory/banBookCell';

import Fetcher from '../utils/fetcher';
import { BookInfo } from '../models/BanBook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigatorHeaderContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: getWindowWidth() - 10,
  },
  inputArea: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    borderBottomColor: MainTintColor,
    borderBottomWidth: 1,
  },
  btnCategory: {
    flex: 1,
  },
  btnSearch: {
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: '#D9D7D9',
  },
});

let whose = null;
const configureHeader = (state) => {
  const canIAccessCategoryParams = (typeof(state.params) !== 'undefined' && typeof(state.params.categoryIndex) !== 'undefined');
  let categoryName = categoryNameRecognizer(0);
  let categoryPlaceholder = categoryPlaceholderRecognizer(0);
  if (canIAccessCategoryParams) {
    categoryName = categoryNameRecognizer(state.params.categoryIndex);
    categoryPlaceholder = categoryPlaceholderRecognizer(state.params.categoryIndex);
  }
  return (
    <View style={styles.navigatorHeaderContainer}>
      <Button
        style={styles.btnCategory}
        title={ categoryName }
        color={MainTintColor}
        onPress={ () => whose.actionChangeCategory() }
      />
      <TextInput
        style={styles.inputArea}
        clearButtonMode={'while-editing'}
        selectionColor={MainTintColor}
        placeholder={categoryPlaceholder}
        onChangeText={ (text) => { whose.actionChangeSearchText(text) }}
      />
      <Button
        style={styles.btnSearch}
        title={'搜索'}
        color={MainTintColor}
        onPress={ () => whose.actionSearch() }
      />
    </View>
  );
};

class InitialPage extends PureComponent {
  static navigationOptions = ({navigation}) => {
    const { state } = navigation;
    return {
      title: 'Index',
      headerTitle: configureHeader(state),
      headerStyle: {
        backgroundColor: '#f6f6f6',
      },
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
    whose = this;
    this.state = {
      categoryIndex: CategoryEnum.id,
      items: [],
      keyword: '',
    };
  }

  /**
   * 改变搜索类别操作
   */
  actionChangeCategory = () => {
    this.props.dispatch(ModalPickerActionCreators.PresentModalPicker('选择分类', CategoryKeyValue(), this.state.categoryIndex));
  };

  /**
   * 搜索操作
   */
  actionSearch = () => {
    Keyboard.dismiss();
    Fetcher.fetchBySearch(this.state.keyword)
    .then((result) => {
      const total = result.total;
      const books = result.books;
      const bookInfos = books.map((value) => {
        return BookInfo.makeBookInfoFrom(value);
      });
      this.setState({
        items: bookInfos,
      });
    })
    .catch((e) => {
      console.log(e);
    });
  };

  /**
   * 弹框消失操作
   */
  actionPickerDismiss = (index) => {
    const {setParams} = this.props.navigation;
    setParams({ categoryIndex: index });
    this.setState({
      categoryIndex: index,
    });
  };

  /**
   * 改变搜索关键字操作
   */
  actionChangeSearchText = (text) => {
    this.setState({
      keyword: text,
    });
  };

  /**
   * 产生 cell 的唯一标识符
   */
  generateKey = (item, index) => {
    return Symbol(`${index}`).toString();
  };

  /**
   * 根据类别的选择进行相应的 cell 渲染
   */
  renderItems = ({item, index}) => {
    switch (this.state.categoryIndex) {
      case CategoryEnum.id:
        return null;
      case CategoryEnum.isbn:
        return null;
      case CategoryEnum.keywordOrTag:
        return this.renderBanBookCell({item, index});
      case CategoryEnum.bookMostTags:
        return null;
      case CategoryEnum.serie:
        return null;
    }
    return (
      <BanBookCell />
    );
  };

  renderBanBookCell = ({item, index}) => {
    return (
      <BanBookCell item={item} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ModalPicker onRequestClose={ (index) => this.actionPickerDismiss(index) } />
        <FlatList
          style={styles.list}
          data={this.state.items}
          keyExtractor={this.generateKey}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

export default connect()(InitialPage);
