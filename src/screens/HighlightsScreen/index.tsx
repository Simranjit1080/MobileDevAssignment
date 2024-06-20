import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {VIEWPORT_HEIGHT} from '@constants';
import {ContactCard, AppHeader, ImageWithText} from '@components';
import Fab from 'components/Fab';
import {HighlightsTile} from '@types';
import {RouteProp, useRoute} from '@react-navigation/native';

export type HighlightsScreenParams = {
  details: HighlightsTile;
};

export const HighlightsScreen = () => {
  const {params} = useRoute<RouteProp<HighlightsScreenParams>>();
  const {details, image, topSpots, title} = params;

  return (
    <SafeAreaView edges={[]} style={styles.safeAreaContainer}>
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
            <View key={item} style={styles.topSpotContainer}>
              <Text style={styles.topSpotTitleText}>
                {index + 1}. {item}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomSectionTitleText}>Travel Guide</Text>
          <ContactCard />
        </View>
      </ScrollView>
      <Fab text="Book a trip" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#e5f2f2',
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
    color: '#001A1A',
  },
  topSpotsText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#001A1A',
    marginBottom: 8,
    marginLeft: 16,
  },
  topSpotContainer: {
    marginTop: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowColor: '#008080',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 4,
    paddingLeft: 16,
  },
  topSpotTitleText: {
    color: '#008080',
    marginVertical: 30,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
  },
  bottomSectionTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#001A1A',
    marginBottom: 8,
    marginTop: 40,
  },
});
