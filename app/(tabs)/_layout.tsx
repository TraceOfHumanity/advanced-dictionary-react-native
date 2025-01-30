import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabIcon = ({ name, color, icon }: { name: string, color: string, icon: string }) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen name="dictionary"  options={{ headerShown: false }} />
      <Tabs.Screen name="addWords" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
    </Tabs>
    </>
  )
}

export default TabsLayout