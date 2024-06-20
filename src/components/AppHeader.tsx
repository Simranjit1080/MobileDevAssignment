import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AlohaIcon} from '@assets/icons';

export const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AlohaIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
