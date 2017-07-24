import {
  StackNavigator,
} from 'react-navigation';
import InitialPage from '../initialPage/initialPage';
import Setting from '../setting/setting';

const SettingNavigator = StackNavigator(
  {
    Setting: {
      screen: Setting,
    },
  },

  {
    initialRouteName: 'Setting',
  },
);

const MainNavigator = StackNavigator(
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

const AppNavigator = StackNavigator(
  {
    // 声明各个 screen
    MainScreen: {
      screen: MainNavigator,
    },
    SettingScreen: {
      screen: SettingNavigator,
    },
  },

  // 配置 StackNavigator
  {
    headerMode: 'none',
    initialRouteName: 'MainScreen',
    mode: 'modal',
  },
);

export default AppNavigator;
