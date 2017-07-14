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
import * as ActionCreators from '../actions/initialPage/actionCreators';

import { getWindowWidth } from '../utils/commonUtils'; 
import { MainTintColor } from '../const/commonConst';

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

let whose;
const configureHeader = () => {
    return (
      <View style={styles.navigatorHeaderContainer}>
        <Button
          style={styles.btnCategory}
          title={'Book'}
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
          title={'Search'}
          color={MainTintColor}
          onPress={ () => whose.actionSearch() }
        />
      </View>
    );
  };

class InitialPage extends PureComponent {
  static navigationOptions = {
    title: 'Index',
    headerTitle: configureHeader(),
    headerStyle: {
      backgroundColor: '#f6f6f6',
    },
    headerLeft: null,
    headerRight: null,
  };

  constructor(props) {
    super(props);
    whose = this;
  }

  actionChangeCategory = () => {
    this.props.dispatch(ActionCreators.CommencingSearching());
  };

  actionSearch = () => {
    this.props.dispatch(ActionCreators.CommencingSearching());
  };

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default connect()(InitialPage);
