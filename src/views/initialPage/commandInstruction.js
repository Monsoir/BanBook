import React, {
  PureComponent,
} from 'react';

import {
  MainTintColor,
} from '../../const/commonConst.js';

import {
  View,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5 + 25 + 10,
    marginRight: 0,
  },
  button: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
});

const Instructions = [
  '@ + 关键词，书籍名称 = 模糊查找',
  '& + ISBN = 精确查找',
  '# + 标签名称 = 根据标签查找书籍',
];

export default class CommandInstructions extends PureComponent {

  instructionOnPressed = (index) => {
    if (this.props.instructionSelected) {
      this.props.instructionSelected(index);
    }
  };

  renderInstructions = (items) => {
    const instructionItems = items.map((value, index) => {
      return (
        <Button
          style={styles.button}
          title={value}
          color={MainTintColor}
          onPress={() => this.instructionOnPressed(index)}
          key={Symbol(`${value}`).toString()}
        />
      );
    });

    return (
      <View style={styles.subContainer}>
        {instructionItems}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderInstructions(Instructions)}
      </View>
    );
  }
}

