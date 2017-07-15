import {
  Dimensions,
} from 'react-native';

const getWindowWidth = () => {
  return Dimensions.get('window').width;
};

const getWindowHeight = () => {
  return Dimensions.get('window').height;
};

export {
  getWindowWidth,
  getWindowHeight,
};
