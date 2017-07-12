/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Fetcher from './src/utils/fetcher';
import {
  BaseURL,
  AnnotationFormat,
  AnnotationOrder,
} from './src/const/serviceConst';
import { BookInfo } from './src/models/BanBook';
import { BookAnnotation } from './src/models/BanBookAnnotation';

export default class BanBook extends Component {

  componentDidMount() {
    // Fetcher.fetchFrom(`${BaseURL}1885170`)
    // .then((result) => {
    //   const bookInfo = BookInfo.makeBookInfoFrom(result);
    //   console.log(bookInfo);
    // });

    // Fetcher.fetchByISBN('9787111187776')
    // .then((result) => {
    //   const bookInfo = BookInfo.makeBookInfoFrom(result);
    //   console.log(bookInfo);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    // Fetcher.fetchBySearch('算法')
    // .then((result) => {
    //   const total = result.total;
    //   const books = result.books;
    //   const bookInfos = books.map((value) => {
    //     return BookInfo.makeBookInfoFrom(value);
    //   });
    //   console.log(`total: ${total}`);
    //   console.log(bookInfos);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    // Fetcher.fetchMostTagsOfABook('1885170')
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    // Fetcher.fetchBookAnnotations('1885170', AnnotationFormat.text, AnnotationOrder.collect, 0)
    // .then((result) => {
    //   console.log(result);
    //   const bookAnnotations = result.annotations.map((value) => {
    //     return BookAnnotation.makeBookAnnotationFrom(value);
    //   });
    //   console.log(bookAnnotations);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    // Fetcher.fetchSpecificAnnotation('39449383', AnnotationFormat.text)
    // .then((result) => {
    //   console.log(result);
    //   const annotation = BookAnnotation.makeBookAnnotationFrom(result);
    //   console.log(annotation);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    Fetcher.fetchSerieInfo('1163')
    .then((result) => {
      console.log(result);
      const books = result.books;
      const bookInfos = books.map((value) => {
        return BookInfo.makeBookInfoFrom(value);
      });
      console.log(bookInfos);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BanBook', () => BanBook);
