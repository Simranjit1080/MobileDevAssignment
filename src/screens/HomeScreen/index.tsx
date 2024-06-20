import {
  FlatList,
  ListRenderItem,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  VIEWPORT_HEIGHT,
  VIEWPORT_WIDTH,
  categoriesData,
  highlightsData,
} from '@constants';
import {ArrowIcon} from '@assets/icons';
import {
  ContactCard,
  HightlightsTile,
  AppHeader,
  ImageWithText,
} from '@components';
import {HighlightsTile} from '@types';
import {useNavigation} from '@react-navigation/native';
import Fab from 'components/Fab';

const homeBackground = require('@assets/images/homeBackground.png');

const HighlightsTilesSeparator = () => <View style={styles.tilesSeparator} />;

export const HomeScreen = () => {
  const {navigate} = useNavigation();

  const renderHighlightsTile: ListRenderItem<HighlightsTile> = useCallback(
    ({item}) => (
      <HightlightsTile
        item={item}
        onPress={() => {
          navigate({
            name: item.navScreen,
            params: item,
          });
        }}
      />
    ),
    [navigate],
  );
  return (
    <SafeAreaView edges={[]} style={styles.safeAreaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <AppHeader />
        <ImageWithText
          imageSource={homeBackground}
          style={styles.imageBackgroundStyle}
          textStyle={styles.gradientTextStyle}
          text={'Welcome\nto Hawaii'}
        />
        <View style={styles.carouselContainer}>
          <Text style={styles.highlightsText}>Highlights</Text>
          <FlatList
            disableIntervalMomentum
            data={highlightsData}
            pagingEnabled
            horizontal
            renderItem={renderHighlightsTile}
            snapToAlignment="start"
            snapToInterval={VIEWPORT_WIDTH - 48}
            decelerationRate="fast"
            ItemSeparatorComponent={HighlightsTilesSeparator}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.title}
            contentContainerStyle={styles.carouseScrollContainer}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomSectionTitleText}>Categories</Text>
          {categoriesData.map(item => (
            <Pressable style={styles.categorySection} key={item}>
              <Text style={styles.categoryText}>{item}</Text>
              <ArrowIcon color="#008080" />
            </Pressable>
          ))}
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
    height: VIEWPORT_HEIGHT * 0.52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTextStyle: {
    fontSize: 56,
    fontFamily: 'IBMPlexMono-Bold',
    textAlign: 'center',
    lineHeight: 56,
  },
  carouselContainer: {
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  highlightsText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#001A1A',
    marginBottom: 8,
    marginLeft: 16,
  },
  bottomSectionTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#001A1A',
    marginBottom: 8,
    marginTop: 40,
  },
  carouseScrollContainer: {
    paddingHorizontal: 16,
  },
  tilesSeparator: {
    backgroundColor: 'transparent',
    width: 16,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#fff',
  },
  categoryText: {
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Regular',
    color: '#001A1A',
  },
});
