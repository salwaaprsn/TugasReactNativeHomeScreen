import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyle';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
        <Text style={styles.subtitle}>
          Life’s too short to stay in one place. Find your next favorite city,
          beach, or mountain and let’s get moving!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;