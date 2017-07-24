import React, {
  PureComponent,
} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Instructions,
} from '../../const/commonConst.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  itemContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  item: {
    marginTop: 10,
    fontSize: 20,
    height: 40,
  },
});

export default class InstructionCell extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  changeCellExpandStatus = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  actionSelectCatgory = (index) => {
    if (this.props.selectCallback) {
      this.props.selectCallback(index);
    }
  };

  renderHeader = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={this.changeCellExpandStatus}
      >
        <Text style={styles.headerText}>{'搜索使用规则'}</Text>
      </TouchableOpacity>
    );
  };

  renderBody = () => {
    if (this.state.expanded) {
      const instructions = Instructions.map((value, index) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            key={Symbol(`${index}`).toString()}
            onPress={() => this.actionSelectCatgory(index)}
          >
            <Text
              style={styles.item}
            >
              {value}
            </Text>
          </TouchableOpacity>
        );
      });

      return (
        <View style={styles.body}>
          {instructions}
        </View>
      );
    }

    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }
}
