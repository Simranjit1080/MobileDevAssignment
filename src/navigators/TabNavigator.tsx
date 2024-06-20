import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeIcon, HulaIcon, SurfingIcon, VulcanoIcon} from '@assets/icons';
import {HomeScreen} from '@screens/HomeScreen';
import {SurfingScreen} from '@screens/SurfingScreen';
import {HulaScreen} from '@screens/HulaScreen';
import {VulcanoScreen} from '@screens/VulcanoScreen';

export type TabNavigatorParams = {
  Home: undefined;
  Surfing: undefined;
  Hula: undefined;
  Vulcano: undefined;
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
          shadowColor: '#5151E0',
          shadowOpacity: 0.24,
          shadowRadius: 16,
          elevation: 24,
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#008080',
        tabBarInactiveTintColor: '#001A1A',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: '#008080',
          },
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Surfing"
        component={SurfingScreen}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: '#008080',
          },
          tabBarIcon: ({color}) => <SurfingIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Hula"
        component={HulaScreen}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: '#008080',
          },
          tabBarIcon: ({color}) => <HulaIcon color={color} />,
        })}
      />
      <Tab.Screen
        name="Vulcano"
        component={VulcanoScreen}
        options={({navigation}) => ({
          tabBarItemStyle: {
            paddingVertical: 16,
            paddingBottom: navigation.isFocused() ? 12 : 16,
            borderBottomWidth: navigation.isFocused() ? 4 : 0,
            borderColor: '#008080',
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
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '700',
  },
});
