import React, {
  PureComponent,
} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
} from 'react-native';

import InstructionCell from './instructionCell';
import { MainTintColor } from '../../const/commonConst';

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

const whose = null; // 本尊

const configureHeaderLeft = (state) => {
  return (
    <Button
      style={{marginLeft: 10}}
      title={'返回'}
      color={MainTintColor}
      onPress={() => { whose.props.navigation.goBack(null) }}
    />
  );
};

export default class Setting extends PureComponent {
  static navigationOptions = (params) => {
    return {
      title: '设置',
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
  }

  actionOnSelectCategoryAt = (index) => {
    if (this.props.navigation.state.params.onSelectCallback) {
      this.props.navigation.goBack(null);
      this.props.navigation.state.params.onSelectCallback(index);
    }
  };

  generateKey = (item, index) => {
    return Symbol(`${index}`).toString();
  };

  renderSettingItems = (info) => {
    switch (info.index) {
      case 0:
        return (
          <InstructionCell 
            selectCallback={(index) => { this.actionOnSelectCategoryAt(index) }}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <FlatList
        style={styles.list}
        data={['0']}
        keyExtractor={this.generateKey}
        renderItem={this.renderSettingItems}
      />
    );
  }
}
