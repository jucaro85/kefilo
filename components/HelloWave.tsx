import { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export function HelloWave() {
  const rotationAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotationAnimation, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(rotationAnimation, {
          toValue: -1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(rotationAnimation, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(rotationAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 }
    ).start();
  }, [rotationAnimation]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: rotationAnimation.interpolate({
              inputRange: [-1, 1],
              outputRange: ['-25deg', '25deg'],
            }),
          },
        ],
      }}
    >
      <ThemedText style={styles.wave}>👋</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wave: {
    fontSize: 28,
  },
});
