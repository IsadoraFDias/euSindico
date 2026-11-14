import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import { typography } from '@/theme/tokens';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    [typography.family.primary]: require('../../assets/fonts/Inter.ttf'),
  });

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
