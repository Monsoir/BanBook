export default class ObjectKeyExchanger {
  /**
   * 对某一个对象中的 key 进行替换，并返回一个新的对象，该对象只包含需要替换的 key-value
   * @param {*被操作的数据} rawData
   * @param {*被操作数据中要替换的 Keys} originalKeys
   * @param {*要替换成的 Keys} objectKeys
   */
  static makeObjectFrom(rawData, originalKeys, objectKeys) {
    const temp = {};
    originalKeys.forEach((key, index) => {
      const objectKey = objectKeys[index];
      temp[objectKey] = rawData[key] ? rawData[key] : null;
    });
    return temp;
  }
}
