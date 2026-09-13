import { Animated, type StyleProp, type ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/useThemeColor';

type Props = {
  children: React.ReactNode;
  headerImage?: React.ReactNode;
  headerBackgroundColor?: { light: string; dark: string };
  style?: StyleProp<ViewStyle>;
};

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  style,
}: Props) {
  const insets = useSafeAreaInsets();
  const defaultBackgroundColor = useThemeColor(
    headerBackgroundColor ?? { light: '#A1CEDC', dark: '#1D3D47' },
    'background'
  );

  return (
    <Animated.ScrollView
      nestedScrollEnabled
      style={style}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <StatusBar style="light" />
      <Animated.View
        style={{
          backgroundColor: defaultBackgroundColor,
          paddingTop: insets.top,
          height: 180,
          overflow: 'hidden',
          justifyContent: 'flex-end',
          paddingBottom: 16,
        }}
      >
        {headerImage}
      </Animated.View>
      {children}
    </Animated.ScrollView>
  );
}
