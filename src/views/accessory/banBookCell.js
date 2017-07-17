import React, {
  PureComponent,
} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import { BackgroundColor } from '../../const/commonConst';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: BackgroundColor,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  mainInfoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookMetaDataArea: {
    flexGrow: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
  },
  ratingArea: {
    flexGrow: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  publishDataArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: 'purple',
  },
  thumbnailArea: {
    justifyContent: 'flex-start',
    height: 250,
  },
  commonMainInfoFontStyle: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  subTitle: {
  },
  originTitle: {
  },
  authors: {
  },
  commonPublishInfoFontStyle: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  pubDate: {
  },
  publisher: {
  },
  pages: {
  },
  price: {
  },
  rating: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#F7A72C',
  },
  thumbnail: {
    height: 250,
    borderColor: 'red',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default class BanBookCell extends PureComponent {

  renderRatingArea = () => {
    return (
      <View style={styles.ratingArea}>
        <Text style={styles.rating}>9.0</Text>
      </View>
    );
  };

  renderBookMetaDataArea = () => {
    return (
      <View style={styles.bookMetaDataArea}>
        <Text style={[styles.commonMainInfoFontStyle, styles.title]}>title</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.subTitle]}>sub title</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.originTitle]}>origin title</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.authors]}>authors</Text>
      </View>
    );
  };

  renderMainInfoArea = () => {
    return (
      <View style={styles.mainInfoArea}>
        {this.renderBookMetaDataArea()}
        {this.renderRatingArea()}
      </View>
    );
  };

  renderPublishDataArea = () => {
    return (
      <View style={styles.publishDataArea}>
        <Text style={[styles.commonPublishInfoFontStyle, styles.pubDate]}>出版日期：2017-01-01</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.publisher]}>出版社：XXXXXX</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.pages]}>页数：189</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.price]}>定价：34.9</Text>
      </View>
    );
  };

  renderThumbnailArea = () => {
    return (
      <View style={styles.thumbnailArea}>
        <Image style={styles.thumbnail}/>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          {this.renderMainInfoArea()}
          {this.renderThumbnailArea()}
          {this.renderPublishDataArea()}
        </View>
      </View>
    );
  }
}
