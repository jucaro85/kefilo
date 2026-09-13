import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CustomButton } from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.tint, dark: Colors.dark.tint }}
      headerImage={
        <View style={styles.headerContent}>
          <ThemedText style={styles.headerEmoji}>⚡</ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Bienvenido a Kefilo! 🚀</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Explora</ThemedText>
        <ThemedText>
          Prueba a navegar a la pantalla de ejemplo usando el botón de abajo.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Componentes</ThemedText>
        <ThemedText>
          Los componentes reutilizables están en <ThemedText type="defaultSemiBold">components/</ThemedText>.
          Crea tus propios componentes ahí.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 3: Vistas</ThemedText>
        <ThemedText>
          Las vistas (pantallas) están en <ThemedText type="defaultSemiBold">app/screens/</ThemedText>.
          Usa expo-router para navegar entre ellas.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <CustomButton
          title="Ir a Pantalla de Ejemplo"
          onPress={() => router.push('/screens/ExampleScreen')}
        />
        <CustomButton
          title="Ver Documentación"
          onPress={() => {}}
          variant="secondary"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 64,
    color: '#FFFFFF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    gap: 12,
    marginTop: 20,
    marginBottom: 20,
  },
});
