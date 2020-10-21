import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen112883Navigator from '../features/CopyOfBlankScreen112883/navigator';
import CopyOfBlankScreen112882Navigator from '../features/CopyOfBlankScreen112882/navigator';
import CopyOfBlankScreen112881Navigator from '../features/CopyOfBlankScreen112881/navigator';
import BlankScreen112879Navigator from '../features/BlankScreen112879/navigator';
import BlankScreen012878Navigator from '../features/BlankScreen012878/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen112883: { screen: CopyOfBlankScreen112883Navigator },
CopyOfBlankScreen112882: { screen: CopyOfBlankScreen112882Navigator },
CopyOfBlankScreen112881: { screen: CopyOfBlankScreen112881Navigator },
BlankScreen112879: { screen: BlankScreen112879Navigator },
BlankScreen012878: { screen: BlankScreen012878Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
