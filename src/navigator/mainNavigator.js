import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen112888Navigator from '../features/CopyOfBlankScreen112888/navigator';
import CopyOfBlankScreen112887Navigator from '../features/CopyOfBlankScreen112887/navigator';
import CopyOfBlankScreen112886Navigator from '../features/CopyOfBlankScreen112886/navigator';
import CopyOfBlankScreen112884Navigator from '../features/CopyOfBlankScreen112884/navigator';
import CopyOfBlankScreen112883Navigator from '../features/CopyOfBlankScreen112883/navigator';
import CopyOfBlankScreen112882Navigator from '../features/CopyOfBlankScreen112882/navigator';
import BlankScreen112879Navigator from '../features/BlankScreen112879/navigator';
import BlankScreen012878Navigator from '../features/BlankScreen012878/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen112888: { screen: CopyOfBlankScreen112888Navigator },
CopyOfBlankScreen112887: { screen: CopyOfBlankScreen112887Navigator },
CopyOfBlankScreen112886: { screen: CopyOfBlankScreen112886Navigator },
CopyOfBlankScreen112884: { screen: CopyOfBlankScreen112884Navigator },
CopyOfBlankScreen112883: { screen: CopyOfBlankScreen112883Navigator },
CopyOfBlankScreen112882: { screen: CopyOfBlankScreen112882Navigator },
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
