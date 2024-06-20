import {HighlightsTile} from '@types';
import {Dimensions} from 'react-native';

export const {height: VIEWPORT_HEIGHT, width: VIEWPORT_WIDTH} =
  Dimensions.get('window');

export const colors = {
  white: '#fff',
  primary: '#008080',
  secondary: '#001A1A',
  light: '#E6F2F2',
  shadowDark: '#073838',
  shadowSecondary: '#5151E0',
  transparent: 'transparent',
};

export const highlightsData: Array<HighlightsTile> = [
  {
    image: require('@assets/images/surfingBackground.png'),
    title: 'Surfing',
    navScreen: 'Surfing',
    subTitle: 'Best Hawaiian Islands for surfing.',
    details:
      'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.',
    topSpots: ['Maui', 'Kauai', 'Honolulu'],
  },
  {
    image: require('@assets/images/hulaBackground.png'),

    title: 'Hula',
    navScreen: 'Hula',
    subTitle: 'Try it yourself.',
    details:
      "Hula is a traditional Hawaiian dance that is deeply rooted in the islands' history and culture. It is a powerful form of storytelling through movement, often accompanied by chant (oli) or song (mele).",
    topSpots: ['Oahu', 'Maui', 'Big Island'],
  },
  {
    image: require('@assets/images/vulcanoBackground.png'),
    title: 'Vulcanoes',
    navScreen: 'Vulcano',
    subTitle: 'Volcanic conditions can change at any time.',
    details:
      "Hawaii is home to some of the world's most active and accessible volcanoes. These natural wonders offer breathtaking views and unique geological experiences.",
    topSpots: ['Big Island (Hawaii Island)', 'Maui', 'Oahu'],
  },
];

export const categoriesData: Array<string> = [
  'Adventure',
  'Culinary',
  'Eco-tourism',
  'Family',
  'Sports',
];
