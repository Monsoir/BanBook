import {
  Dimensions,
} from 'react-native';

const getWindowWidth = () => {
  return Dimensions.get('window').width;
};

export { getWindowWidth };
