import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FabProps} from '@types';

const Fab = ({text}: FabProps) => {
  return (
    <View style={styles.fabContainer}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Fab;

const styles = StyleSheet.create({
  fabContainer: {
    zIndex: 2,
    position: 'absolute',
    bottom: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: '#008080',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#073838',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#fff',
  },
});
