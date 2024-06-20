import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VIEWPORT_WIDTH} from '@constants';
import {ArrowIcon} from '@assets/icons';
import {HighlightsTileProps} from '@types';

export const HightlightsTile = ({item, onPress}: HighlightsTileProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={item.image} style={styles.imageStyle} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.subTitle}
        </Text>
        <View style={styles.arrowContainer}>
          <ArrowIcon color="#008080" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT_WIDTH - 64,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 384,
    marginTop: 20,
    marginBottom: 40,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#008080',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 24,
  },
  imageStyle: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 24,
  },
  title: {
    color: '#008080',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    fontFamily: 'IBMPlexMono-Regular',
  },
  subTitle: {
    color: '#001A1A',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'IBMPlexMono-Regular',
  },
  arrowContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    right: 24,
    backgroundColor: '#E6F2F2',
    borderRadius: 20,
  },
});