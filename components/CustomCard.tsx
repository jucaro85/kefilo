import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

export type CustomCardProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function CustomCard({
  title,
  description,
  children,
  style,
}: CustomCardProps) {
  const borderColor = useThemeColor({}, 'border');
  const cardBg = useThemeColor({}, 'card');

  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: cardBg, borderColor },
        style,
      ]}
    >
      <ThemedText type="subtitle" style={styles.title}>
        {title}
      </ThemedText>
      {description && (
        <ThemedText style={styles.description}>{description}</ThemedText>
      )}
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    marginBottom: 6,
  },
  description: {
    marginBottom: 8,
    opacity: 0.8,
  },
});
