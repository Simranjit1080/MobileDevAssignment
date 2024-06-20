import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

export const ContactCard = () => {
  return (
    <View style={styles.contactCard}>
      <View style={styles.contactDetailsContainer}>
        <View>
          <Text style={styles.contactTitle}>Hadwin Malone</Text>
          <Text style={styles.detailText}>Guide since 2012</Text>
          <Pressable style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </Pressable>
        </View>
        <Image
          source={require('@assets/images/sampleImage.png')}
          style={styles.avatarStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '400',
    color: '#001A1A',
  },
  contactCard: {
    padding: 24,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: '#fff',
  },
  contactTitle: {
    fontSize: 24,
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '700',
    color: '#001A1A',
    marginBottom: 16,
  },
  contactDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarStyle: {
    height: 74,
    width: 74,
    borderRadius: 37,
  },
  contactButton: {
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'flex-start',
    borderColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 32,
  },
  contactButtonText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'IBMPlexMono-Regular',
    fontWeight: '700',
    color: '#008080',
  },
});
