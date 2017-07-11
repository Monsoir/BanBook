class Author {
  constructor({ names, intro } = {}) {
    this.names = names;
    this.intro = intro;
  }
}

class Series {
  constructor({ id, title } = {}) {
    this.id = id;
    this.title = title;
  }
}

class BookContent {
  constructor({ catalog, originTitle, title, subTitle, summary } = {}) {
    this.catalog = catalog;
    this.originTitle = originTitle;
    this.title = title;
    this.subTitle = subTitle;
    this.summary = summary;
  }
}

class BookConfiguration {
  constructor({ binding, isbn10, isbn13, pages, price, pubDate, publisher, translator } = {}) {
    this.binding = binding;
    this.isbn10 = isbn10;
    this.isbn13 = isbn13;
    this.pages = pages;
    this.price = price;
    this.pubDate = pubDate;
    this.publisher = publisher;
    this.translator = translator;
  }
}

class BookPlatformConfiguration {
  constructor({ platformLink, id, thumbnails, rating, series, tags } = {}) {
    this.platformLink = platformLink;
    this.id = id;
    this.thumbnails = thumbnails;
    this.rating = rating;
    this.series = series;
    this.tags = tags;
  }
}

class BookInfo {
  constructor({ author, series, bookContent, bookConfiguration, bookPlatformConfiguration } = {}) {
    this.author = author;
    this.series = series;
    this.bookContent = bookContent;
    this.bookConfiguration = bookConfiguration;
    this.bookPlatformConfiguration = bookPlatformConfiguration;
  }

  static makeBookInfoFrom(rawData) {
    const author = this.makeAuthorFrom(rawData);
    const series = this.makeSeriesFrom(rawData);
    const bookContent = this.makeBookContentFrom(rawData);
    const bookConfiguration = this.makeBookConfigurationFrom(rawData);
    const bookPlatformConfiguration = this.makeBookPlatformConfigurationFrom(rawData);
    const temp = {
      author: author,
      series: series,
      bookContent: bookContent,
      bookConfiguration: bookConfiguration,
      bookPlatformConfiguration: bookPlatformConfiguration,
    };
    return new BookInfo(temp);
  }

  static makeAuthorFrom(rawData) {
    const authors = rawData.author ? rawData.author : null;
    const authorIntros = rawData.author_intro ? rawData.author_intro : null;
    return new Author({ names: authors, intro: authorIntros });
  }

  static makeSeriesFrom(rawData) {
    const seriesID = rawData.series.id ? rawData.series.id : null;
    const seriesTitle = rawData.series.title ? rawData.series.title : null;
    return new Series({ id: seriesID, title: seriesTitle });
  }

  static makeBookContentFrom(rawData) {
    const keys = ['catalog', 'origin_title', 'title', 'subTitle', 'summary'];
    const objectKeys = ['catalog', 'originTitle', 'title', 'subTitle', 'summary'];
    const temp = this.makeObjectFrom(rawData, keys, objectKeys);
    return new BookContent(temp);
  }

  static makeBookConfigurationFrom(rawData) {
    const keys = ['binding', 'isbn10', 'isbn13', 'pages', 'price', 'pubdate', 'publisher', 'translator'];
    const objectKeys = ['binding', 'isbn10', 'isbn13', 'pages', 'price', 'pubDate', 'publisher', 'translator'];
    const temp = this.makeObjectFrom(rawData, keys, objectKeys);
    return new BookConfiguration(temp);
  }

  static makeBookPlatformConfigurationFrom(rawData) {
    const keys = ['alt', 'id', 'images', 'rating', 'series', 'tags'];
    const objectKeys = ['platformLink', 'id', 'thumbnails', 'rating', 'series', 'tags'];
    const temp = this.makeObjectFrom(rawData, keys, objectKeys);
    return new BookPlatformConfiguration(temp);
  }

  static makeObjectFrom(rawData, originalKeys, objectKeys) {
    const temp = {};
    originalKeys.forEach((key, index) => {
      const objectKey = objectKeys[index];
      temp[objectKey] = rawData[key] ? rawData[key] : null;
    });
    return temp;
  }
}

export { Author, Series, BookContent, BookConfiguration, BookPlatformConfiguration, BookInfo };
