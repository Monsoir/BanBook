import React, {
  PureComponent,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  FlatList,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import * as InitialPageActionCreators from '../../actions/initialPage/actionCreators';

import { getWindowWidth } from '../../utils/commonUtils'; 
import {
  MainTintColor,
  BackgroundColor,
  CategoryEnum,
} from '../../const/commonConst';
import BanBookCell from './../accessory/banBookCell';
import { LoadingFooter, NoMoreDataFooter } from '../accessory/listAccessories';
import CommandInstructions from './commandInstruction';

import Fetcher from '../../utils/fetcher';
import { BookInfo } from '../../models/BanBook';
import { SearchCommandError, Util } from './initialPageUtils';

/**
 * 一页获取的条目数
 */
const PAGESIZE = 10;

const HeaderSizeMargin = 5;
const HeaderLeftWidth = 25;
const HeaderInnerMargin = 10;

/**
 * 列表脚状态
 */
const FooterStatus = {
  initial: 0,
  loading: 1,
  loaded: 2,
  loadError: 3,
  noMoreData: 4,
};

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
    width: getWindowWidth() - 2 * HeaderSizeMargin - HeaderLeftWidth - HeaderInnerMargin,
    marginLeft: 50,
  },
  setting: {
    flex: 1,
    width: 25,
    resizeMode: 'contain',
    tintColor: MainTintColor,
  },
  inputArea: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    borderBottomColor: MainTintColor,
    borderBottomWidth: 1,
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
let searchInput = null;
const configureHeader = (state) => {
  return (
    <View style={styles.navigatorHeaderContainer}>
      <TextInput
        ref={(input) => { searchInput = input }}
        style={styles.inputArea}
        clearButtonMode={'while-editing'}
        selectionColor={MainTintColor}
        placeholder={'输入：命令 + 关键字'}
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

/**
 * 配置导航栏左侧按钮
 * @param {*导航栏参数} state
 */
const configureHeaderLeft = (state) => {
  return (
    <TouchableOpacity style={{marginLeft: 10}}>
      <Image
        style={styles.setting}
        source={require('../../images/setting.png')}
      />
    </TouchableOpacity>
  );
}

class InitialPage extends PureComponent {
  static navigationOptions = ({navigation}) => {
    const { state } = navigation;
    return {
      title: 'Index',
      headerTitle: configureHeader(state),
      headerStyle: {
        backgroundColor: '#f6f6f6',
      },
      headerLeft: configureHeaderLeft(),
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
    whose = this;
    this.state = {
      category: '',
      pageIndex: -1, // 当前的页数
      items: [], // 搜索结果
      keyword: '', // 搜索内容
      footerStatus: FooterStatus.initial, // 列表脚状态
      noMoreData: false, // 没有更多数据了
    };
  }

  /**
   * 搜索前的还原状态
   */
  restoreStatus = () => {
    this.state.category = '';
    this.state.pageIndex = -1;
    this.state.noMoreData = false;
    this.setState({
      items: [],
      footerStatus: FooterStatus.initial,
    });
  };

  search = () => {

    // 没有更多数据了
    if (this.state.noMoreData) return;

    // 收键盘，转圈并开始搜索
    console.log('start searching');
    Keyboard.dismiss();
    this.setState({
      footerStatus: FooterStatus.loading,
    });

    const searchByKeywordOrTagDone = (result) => {

      if (result.code && result.code === 112) {
        // TODO: 请求次数过多
        console.log(result.msg);
        this.noMoreData = true;
        this.setState({
          footerStatus: FooterStatus.loadError,
        });
        return;
      }

      const total = result.total;
      const books = result.books;

      if (books.length > 0) {
        // 有数据返回
        const bookInfos = books.map((value) => {
          return BookInfo.makeBookInfoFrom(value);
        });
        this.state.pageIndex += 1;
        this.setState({
          items: this.state.items.concat(bookInfos),
          footerStatus: FooterStatus.loaded,
        });

        // 数据是否已经全部获取
        if (this.state.items.length >= total) {
          this.state.noMoreData = true;
        }

      } else {
        // TODO: 没有数据时的处理
        this.setState({
          footerStatus: FooterStatus.loaded,
        });
      }
    };

    const searchByISBNDone = (result) => {

      if (result.code && result.code === 112) {
        // TODO: 请求次数过多
        console.log(result.msg);
        this.noMoreData = true;
        this.setState({
          footerStatus: FooterStatus.loadError,
        });
        return;
      }

      const bookInfo = BookInfo.makeBookInfoFrom(result);
      this.setState({
        items: [bookInfo],
        footerStatus: FooterStatus.loaded,
        noMoreData: true,
      });
    };

    const errorOccur = (error) => {
      // TODO: 处理请求错误
      console.log(e);
      this.setState({
        footerStatus: FooterStatus.loadError,
      });
    };

    switch (this.state.category) {
      case CategoryEnum.keyword:
      case CategoryEnum.tag:
        {
          const searchTag = (this.state.category == CategoryEnum.keyword) ? false : true;
          Fetcher.fetchBySearch(searchTag ? '' : this.state.keyword, searchTag ? this.state.keyword : '', this.state.pageIndex + 1, PAGESIZE)
          .then((result) => {
            searchByKeywordOrTagDone(result);
          })
          .catch((e) => {
            errorOccur(e);
          });
          break;
        }
      case CategoryEnum.isbn:
        {
          Fetcher.fetchByISBN(this.state.keyword)
          .then((result) => {
            searchByISBNDone(result);
          })
          .catch((e) => {
            errorOccur(e);
          });
          break;
        }
    }
  }

  /**
   * 搜索操作
   */
  actionSearch = () => {
    this.restoreStatus();

    // 验证输入
    if (!this.state.keyword) {
      // TODO: 没有搜索关键字是提示
      console.log('enter something');
      return;
    }

    const { category, keyword, error } = Util.whatToSearch(this.state.keyword);
    if (error) {
      // TODO: 错误处理
      console.log(error);
      return;
    }

    this.state.category = category;
    this.state.keyword = keyword;
    this.search();
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
   * 当到达了列表底部
   */
  actionReachEnd = () => {
    // 没数据的时候直接返回，否则会出现转圈
    if (this.state.items.length <= 0) return;

    if (this.state.noMoreData) {
      // TODO: 设置没有更多数据时候的 footer
      this.setState({
        footerStatus: FooterStatus.noMoreData,
      });
    } else {
      this.search();
    }
  };

  /**
   * 选中某条指引后，将指引的符号投射到输入框
   */
  actionInstructionSelected = (index) => {
    let symbol = '@';
    switch (index) {
      case 0:
        symbol = '@';
        break;
      case 1:
        symbol = '&';
        break;
      case 2:
        symbol = '#';
        break;
      default:
        break;
    }

    if (searchInput) {
      searchInput.setNativeProps({ text: symbol });
      searchInput.focus();
    }
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
    return this.renderBanBookCell({item, index});
  };

  renderBanBookCell = ({item, index}) => {
    return (
      <BanBookCell item={item} />
    );
  };

  renderFooter = () => {
    switch (this.state.footerStatus) {
      case FooterStatus.initial:
        return null;
      case FooterStatus.loading:
        return LoadingFooter;
      case FooterStatus.loaded:
        return null;
      case FooterStatus.loadError:
        return null;
      case FooterStatus.noMoreData:
        return NoMoreDataFooter;
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.items}
          keyExtractor={this.generateKey}
          renderItem={this.renderItems}
          onEndReachedThreshold={0}
          onEndReached={this.actionReachEnd}
          ListFooterComponent={this.renderFooter()}
          ListEmptyComponent={() => (
            <CommandInstructions instructionSelected={(index) => this.actionInstructionSelected(index)} />
          )}
        />
      </View>
    );
  }
}

export default connect()(InitialPage);
