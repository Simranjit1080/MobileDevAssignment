import {AppNavigatorParams, TabNavigatorParams} from '@navigators';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorParams, TabNavigatorParams {}
  }
}
