import { Stack, router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CustomCard } from '@/components/CustomCard';
import { CustomButton } from '@/components/CustomButton';

export default function ExampleScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Pantalla de Ejemplo' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Pantalla de Ejemplo
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Esta es una vista de ejemplo. Puedes modificarla o crear nuevas vistas en <ThemedText type="defaultSemiBold">app/screens/</ThemedText>
        </ThemedText>

        <CustomCard
          title="Componente Card"
          description="Este es un componente de tarjeta reutilizable que puedes usar en toda tu app."
        />

        <CustomCard
          title="Fácil de Extender"
          description="Agrega más componentes en la carpeta components/ y úsalo en cualquier pantalla."
        />

        <CustomButton
          title="← Volver atrás"
          onPress={() => router.back()}
          variant="secondary"
          style={{ marginTop: 20 }}
        />
        <CustomButton
          title="Ir al Home"
          onPress={() => router.replace('/')}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
