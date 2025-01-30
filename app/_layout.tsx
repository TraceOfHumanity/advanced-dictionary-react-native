import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
