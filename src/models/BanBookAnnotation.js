import { BookInfo } from './BanBook';
import ObjectKeyExchanger from '../utils/ObjectKeyExchanger';

class AuthorUser {
  constructor({ userLink, avatar, largeAvatar, id, isBanned, isSuicide, name, type, uid, url } = {}) {
    this.userLink = userLink;
    this.avatar = avatar;
    this.largeAvatar = largeAvatar;
    this.id = id;
    this.isBanned = isBanned;
    this.isSuicide = isSuicide;
    this.name = name;
    this.type = type;
    this.uid = uid;
    this.url = url;
  }
}

class Annotation {
  constructor({ abstract, abstractPhoto, chapter, commentCount, content, id, pageNumber, privacy, summary, time } = {}) {
    this.abstract = abstract;
    this.abstractPhoto = abstractPhoto;
    this.chapter = chapter;
    this.commentCount = commentCount;
    this.content = content;
    this.id = id;
    this.pageNumber = pageNumber;
    this.privacy = privacy;
    this.summary = summary;
    this.time = time;
  }
}

class BookAnnotation {
  constructor({ authorUser, annotation, bookInfo } = {}) {
    this.authorUser = authorUser;
    this.annotation = annotation;
    this.bookInfo = bookInfo;
  }

  static makeBookAnnotationFrom(rawData) {
    const bookInfo = BookInfo.makeBookInfoFrom(rawData.book);
    const authorUser = this.makeAuthorUserFrom(rawData.author_user);
    const annotation = this.makeAnnotationFrom(rawData);
    const temp = {
      authorUser: authorUser,
      annotation: annotation,
      bookInfo: bookInfo,
    };
    return new BookAnnotation(temp);
  }

  static makeAuthorUserFrom(rawData) {
    const keys = [
      'alt',
      'avatar',
      'id',
      'is_banned',
      'is_suicide',
      'large_avatar',
      'name',
      'type',
      'uid',
      'url',
    ];
    const objectKeys = [
      'userLink',
      'avatar',
      'id',
      'isBanned',
      'isSuicide',
      'largeAvatar',
      'name',
      'type',
      'uid',
      'url',
    ];
    const temp = ObjectKeyExchanger.makeObjectFrom(rawData, keys, objectKeys);
    return temp;
  }

  static makeAnnotationFrom(rawData) {
    const keys = [
      'abstract',
      'abstract_photo',
      'chapter',
      'comments_count',
      'content',
      'id',
      'page_no',
      'privacy',
      'summary',
      'time',
    ];
    const objectKeys = [
      'abstract',
      'abstractPhoto',
      'chapter',
      'commentCount',
      'content',
      'id',
      'pageNumber',
      'privacy',
      'summary',
      'time',
    ];
    const temp = ObjectKeyExchanger.makeObjectFrom(rawData, keys, objectKeys);
    return temp;
  }
}

export { AuthorUser, Annotation, BookAnnotation };
