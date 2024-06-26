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
import {
  VIEWPORT_HEIGHT,
  VIEWPORT_WIDTH,
  categoriesData,
  colors,
  highlightsData,
} from '@constants';
import {ArrowIcon} from '@assets/icons';
import {
  ContactCard,
  HighlightsTile,
  AppHeader,
  ImageWithText,
} from '@components';
import {HighlightsTileType} from '@types';
import {useNavigation} from '@react-navigation/native';
import Fab from 'components/Fab';

const homeBackground = require('@assets/images/homeBackground.png');

const HighlightsTilesSeparator = () => <View style={styles.tilesSeparator} />;

export const HomeScreen = () => {
  const {navigate} = useNavigation();

  const renderHighlightsTile: ListRenderItem<HighlightsTileType> = useCallback(
    ({item}) => (
      <HighlightsTile
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
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={colors.transparent}
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
    backgroundColor: colors.white,
  },
  highlightsText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.secondary,
    marginBottom: 8,
    marginLeft: 16,
  },
  bottomSectionTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.secondary,
    marginBottom: 8,
    marginTop: 40,
  },
  carouseScrollContainer: {
    paddingHorizontal: 16,
  },
  tilesSeparator: {
    backgroundColor: colors.transparent,
    width: 16,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
    padding: 24,
    backgroundColor: colors.white,
  },
  categoryText: {
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Regular',
    color: colors.secondary,
  },
});
