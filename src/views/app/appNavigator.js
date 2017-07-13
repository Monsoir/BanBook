import {
  StackNavigator,
} from 'react-navigation';
import InitialPage from '../initialPage';

const AppNavigator = StackNavigator(
  {
    // 声明各个 screen
    InitialPage: {
      screen: InitialPage,
    },
  },

  // 配置 StackNavigator
  {
    initialRouteName: 'InitialPage',
  },
);

export default AppNavigator;
