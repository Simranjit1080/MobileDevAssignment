import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VIEWPORT_HEIGHT, colors} from '@constants';
import {ContactCard, AppHeader, ImageWithText} from '@components';
import Fab from 'components/Fab';
import {HighlightsTileType} from '@types';
import {RouteProp, useRoute} from '@react-navigation/native';

export type HighlightsScreenParams = {
  details: HighlightsTileType;
};

export const HighlightsScreen = () => {
  const {params} = useRoute<RouteProp<HighlightsScreenParams>>();
  const {details, image, topSpots, title} = params;

  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <AppHeader />
        <ImageWithText
          imageSource={image}
          style={styles.imageBackgroundStyle}
          textStyle={styles.gradientTextStyle}
          text={title}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{details}</Text>
          <Text style={styles.topSpotsText}>Top spots</Text>
          {topSpots.map((item, index) => (
            <View key={item.title} style={styles.topSpotContainer}>
              <Text style={styles.topSpotTitleText}>
                {index + 1}. {item.title}
              </Text>
              <Image source={item.image} style={styles.topSpotImage} />
            </View>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomSectionTitleText}>Travel Guide</Text>
          <ContactCard />
        </View>
      </ScrollView>
      <Fab text="Book a trip" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.light,
    paddingBottom: 80,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: VIEWPORT_HEIGHT * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTextStyle: {
    fontSize: 40,
    fontFamily: 'IBMPlexMono-Bold',
    textAlign: 'center',
    lineHeight: 52,
  },
  detailsContainer: {
    paddingTop: 40,
    paddingBottom: 80,
  },
  detailsText: {
    marginBottom: 40,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'IBMPlexMono-Regular',
    color: colors.secondary,
  },
  topSpotsText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.secondary,
    marginBottom: 8,
    marginLeft: 16,
  },
  topSpotImage: {
    height: '100%',
    width: '40%',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  topSpotContainer: {
    marginTop: 8,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowColor: colors.primary,
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 4,
    paddingLeft: 16,
  },
  topSpotTitleText: {
    color: colors.primary,
    marginVertical: 30,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
  },
  bottomSectionTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.secondary,
    marginBottom: 8,
    marginTop: 40,
  },
});
