import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import '../global.css';

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="dictionary" options={{ headerShown: false }} />
    // </Stack>
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-green-500 font-bold text-2xl">Hello</Text>
    </View>
  );
}
