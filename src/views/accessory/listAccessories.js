import React, {
  PureComponent,
} from 'react';

import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
  },
  prompt: {
    flex: 1,
    textAlign: 'center',
  },
});

class LoadingFooter extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={true}
        />
      </View>
    );
  }
}

class NoMoreDataFooter extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
          {'没有更多数据了'}
        </Text>
      </View>
    );
  }
}

export {
  LoadingFooter,
  NoMoreDataFooter,
};
