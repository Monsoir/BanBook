import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import { BackgroundColor } from '../../const/commonConst';
import { BookInfo } from '../../models/BanBook';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#D9D7D9',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mainInfoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookMetaDataArea: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  ratingArea: {
    flex: 1,
    justifyContent: 'center',
  },
  publishDataArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  thumbnailArea: {
    justifyContent: 'flex-start',
  },
  commonMainInfoFontStyle: {
    fontSize: 15,
    fontWeight: '100',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 10,
  },
  subTitle: {
  },
  originTitle: {
    fontStyle: 'italic',
  },
  authors: {
  },
  commonPublishInfoFontStyle: {
    fontSize: 12,
    fontWeight: '100',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
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
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#F7A72C',
  },
  thumbnail: {
    height: 300,
    marginLeft: 10,
  },
});

class BanBookCell extends PureComponent {

  constructor(props) {
    super(props);
  }

  renderRatingArea = () => {
    return (
      <View style={styles.ratingArea}>
        <Text style={styles.rating}>{this.props.item.bookPlatformConfiguration.rating.average}</Text>
      </View>
    );
  };

  renderBookMetaDataArea = () => {
    return (
      <View style={styles.bookMetaDataArea}>
        <Text style={[styles.commonMainInfoFontStyle, styles.title]}>{this.props.item.bookContent.title}</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.subTitle]}>{this.props.item.bookContent.subTitle}</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.originTitle]}>{this.props.item.bookContent.originTitle}</Text>
        <Text style={[styles.commonMainInfoFontStyle, styles.authors]}>{this.props.item.author.names}</Text>
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
        <Text style={[styles.commonPublishInfoFontStyle, styles.pubDate]}>出版日期：{this.props.item.bookConfiguration.pubDate}</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.publisher]}>出版社：{this.props.item.bookConfiguration.publisher}</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.pages]}>页数：{this.props.item.bookConfiguration.pages}</Text>
        <Text style={[styles.commonPublishInfoFontStyle, styles.price]}>定价：{this.props.item.bookConfiguration.price}</Text>
      </View>
    );
  };

  renderThumbnailArea = () => {
    return (
      <View style={styles.thumbnailArea}>
        <Image
          style={styles.thumbnail}
          resizeMode={'cover'}
          source={{uri: this.props.item.bookPlatformConfiguration.thumbnails.large}}
        />
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

const propTypes = {
  item: PropTypes.instanceOf(BookInfo),
};

const defaultProps = {
  item: null,
};

BanBookCell.propTypes = propTypes;
BanBookCell.defaultProps = defaultProps;

export default BanBookCell;
