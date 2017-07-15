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
} from 'react-native';
import { connect } from 'react-redux';
import * as InitialPageActionCreators from '../actions/initialPage/actionCreators';
import * as ModalPickerActionCreators from '../actions/modalPicker/actionCreators';

import { getWindowWidth } from '../utils/commonUtils'; 
import { MainTintColor, CategoryKeyValue, categoryNameRecognizer } from '../const/commonConst';
import ModalPicker from './accessory/modalPicker';

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
});

let whose = null;
const configureHeader = (state) => {
  const categoryName = typeof(state.params) !== 'undefined' && typeof(state.params.categoryIndex) !== 'undefined' ? categoryNameRecognizer(state.params.categoryIndex) : categoryNameRecognizer(0);
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
  }

  actionChangeCategory = () => {
    this.props.dispatch(ModalPickerActionCreators.PresentModalPicker('选择分类', CategoryKeyValue()));
  };

  actionSearch = () => {
    this.props.dispatch(InitialPageActionCreators.CommencingSearching());
  };

  actionPickerDismiss = (index) => {
    const {setParams} = this.props.navigation;
    setParams({ categoryIndex: index });
  };

  render() {
    return (
      <View style={styles.container}>
        <ModalPicker onRequestClose={ (index) => this.actionPickerDismiss(index) } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryIndex: state.categoryIndex,
  };
};

export default connect(mapStateToProps)(InitialPage);
