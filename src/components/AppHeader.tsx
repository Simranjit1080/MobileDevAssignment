import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AlohaIcon} from '@assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '@constants';

export const AppHeader = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top + 8}]}>
      <AlohaIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
