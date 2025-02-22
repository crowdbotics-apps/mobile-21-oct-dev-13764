import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212914Navigator from '../features/BlankScreen212914/navigator';
import CopyOfBlankScreen012911Navigator from '../features/CopyOfBlankScreen012911/navigator';
import CopyOfCopyOfBlankScreen012909Navigator from '../features/CopyOfCopyOfBlankScreen012909/navigator';
import BlankScreen112906Navigator from '../features/BlankScreen112906/navigator';
import CopyOfBlankScreen112905Navigator from '../features/CopyOfBlankScreen112905/navigator';
import CopyOfCopyOfBlankScreen112903Navigator from '../features/CopyOfCopyOfBlankScreen112903/navigator';
import CopyOfCopyOfBlankScreen112902Navigator from '../features/CopyOfCopyOfBlankScreen112902/navigator';
import CopyOfBlankScreen112899Navigator from '../features/CopyOfBlankScreen112899/navigator';
import CopyOfBlankScreen112898Navigator from '../features/CopyOfBlankScreen112898/navigator';
import CopyOfBlankScreen112897Navigator from '../features/CopyOfBlankScreen112897/navigator';
import CopyOfBlankScreen112896Navigator from '../features/CopyOfBlankScreen112896/navigator';
import CopyOfBlankScreen112895Navigator from '../features/CopyOfBlankScreen112895/navigator';
import CopyOfBlankScreen112894Navigator from '../features/CopyOfBlankScreen112894/navigator';
import CopyOfBlankScreen112893Navigator from '../features/CopyOfBlankScreen112893/navigator';
import CopyOfBlankScreen112892Navigator from '../features/CopyOfBlankScreen112892/navigator';
import CopyOfBlankScreen112891Navigator from '../features/CopyOfBlankScreen112891/navigator';
import CopyOfBlankScreen112890Navigator from '../features/CopyOfBlankScreen112890/navigator';
import CopyOfBlankScreen112889Navigator from '../features/CopyOfBlankScreen112889/navigator';
import CopyOfBlankScreen112888Navigator from '../features/CopyOfBlankScreen112888/navigator';
import CopyOfBlankScreen112887Navigator from '../features/CopyOfBlankScreen112887/navigator';
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
BlankScreen212914: { screen: BlankScreen212914Navigator },
CopyOfBlankScreen012911: { screen: CopyOfBlankScreen012911Navigator },
CopyOfCopyOfBlankScreen012909: { screen: CopyOfCopyOfBlankScreen012909Navigator },
BlankScreen112906: { screen: BlankScreen112906Navigator },
CopyOfBlankScreen112905: { screen: CopyOfBlankScreen112905Navigator },
CopyOfCopyOfBlankScreen112903: { screen: CopyOfCopyOfBlankScreen112903Navigator },
CopyOfCopyOfBlankScreen112902: { screen: CopyOfCopyOfBlankScreen112902Navigator },
CopyOfBlankScreen112899: { screen: CopyOfBlankScreen112899Navigator },
CopyOfBlankScreen112898: { screen: CopyOfBlankScreen112898Navigator },
CopyOfBlankScreen112897: { screen: CopyOfBlankScreen112897Navigator },
CopyOfBlankScreen112896: { screen: CopyOfBlankScreen112896Navigator },
CopyOfBlankScreen112895: { screen: CopyOfBlankScreen112895Navigator },
CopyOfBlankScreen112894: { screen: CopyOfBlankScreen112894Navigator },
CopyOfBlankScreen112893: { screen: CopyOfBlankScreen112893Navigator },
CopyOfBlankScreen112892: { screen: CopyOfBlankScreen112892Navigator },
CopyOfBlankScreen112891: { screen: CopyOfBlankScreen112891Navigator },
CopyOfBlankScreen112890: { screen: CopyOfBlankScreen112890Navigator },
CopyOfBlankScreen112889: { screen: CopyOfBlankScreen112889Navigator },
CopyOfBlankScreen112888: { screen: CopyOfBlankScreen112888Navigator },
CopyOfBlankScreen112887: { screen: CopyOfBlankScreen112887Navigator },
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
