import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeIcon, HulaIcon, SurfingIcon, VulcanoIcon} from '@assets/icons';
import {HomeScreen} from '@screens/HomeScreen';
import {HighlightsScreen} from '@screens/HighlightsScreen';
import {HighlightsTile} from '@types';
import {colors, highlightsData} from '@constants';

export type TabNavigatorParams = {
  Home: undefined;
  Surfing: HighlightsTile;
  Hula: HighlightsTile;
  Vulcano: HighlightsTile;
};

const Tab = createBottomTabNavigator<TabNavigatorParams>();

export const TabNavigator = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: bottom + 72,
          borderTopWidth: 0,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowColor: colors.shadowSecondary,
          shadowOpacity: 0.24,
          shadowRadius: 16,
          elevation: 8,
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: colors.primary,
          },
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Surfing"
        component={HighlightsScreen}
        initialParams={highlightsData[0]}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: colors.primary,
          },
          tabBarIcon: ({color}) => <SurfingIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Hula"
        component={HighlightsScreen}
        initialParams={highlightsData[1]}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: colors.primary,
          },
          tabBarIcon: ({color}) => <HulaIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Vulcano"
        component={HighlightsScreen}
        initialParams={highlightsData[2]}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: colors.primary,
          },
          tabBarIcon: ({color}) => <VulcanoIcon color={color} />,
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 10,
    lineHeight: 16,
    fontFamily: 'IBMPlexMono-Bold',
  },
});
