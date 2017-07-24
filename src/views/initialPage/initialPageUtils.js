import { CategoryEnum } from '../../const/commonConst';

const SearchCommandError = {
  isbnShouldBeNumber: 0,
};

class AnalyseResult {
  constructor(category = CategoryEnum.keyword, keyword = '', error = null) {
    this.category = category;
    this.keyword = keyword;
    this.error = error;
  }
}

class Util {

  static whatToSearch(command) {
    const symbol = command.charAt(0);
    if (Object.values(CategoryEnum).includes(symbol)) {
      const searchKeyword = command.slice(1);
      switch (symbol) {
        case CategoryEnum.keyword:
          return new AnalyseResult(symbol, searchKeyword, null);
        case CategoryEnum.isbn:
          {
            const containsOnlyNumber = /^\d+$/.test(searchKeyword);
            return new AnalyseResult(symbol, searchKeyword, containsOnlyNumber ? null : SearchCommandError.isbnShouldBeNumber);
          }
        case CategoryEnum.annotation:
          return new AnalyseResult(symbol, searchKeyword, null);
        case CategoryEnum.serie:
          return new AnalyseResult(symbol, searchKeyword, null);
        case CategoryEnum.tag:
          return new AnalyseResult(symbol, searchKeyword, null);
        default:
          return new AnalyseResult(CategoryEnum.keyword, searchKeyword, null);
      }
    }

    return new AnalyseResult(CategoryEnum.keyword, command, null);
  }
}

export {
  SearchCommandError,
  Util,
};
