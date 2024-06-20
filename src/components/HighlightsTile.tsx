import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VIEWPORT_WIDTH, colors} from '@constants';
import {ArrowIcon} from '@assets/icons';
import {HighlightsTileProps} from '@types';

export const HighlightsTile = ({item, onPress}: HighlightsTileProps) => {
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
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 384,
    marginTop: 20,
    marginBottom: 40,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: colors.primary,
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 16,
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
    color: colors.primary,
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'IBMPlexMono-Bold',
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 16,
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
    backgroundColor: colors.light,
    borderRadius: 20,
  },
});
