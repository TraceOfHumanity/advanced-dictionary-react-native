import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { dictionaryIcon, addWordsIcon, settingsIcon } from '../../components/icons'

const TabIcon = ({ name, color, icon, focused }: { name: string, color: string, icon: string, focused: boolean }) => {
  return (
    <View className='items-center justify-center gap-2 w-full bg-red-500'>
      <Image source={icon} 
      resizeMode="contain"
      className='w-6 h-6'
     />
     <Text className={`whitespace-nowrap text-xs ${focused ? 'font-bold' : 'font-normal'}`}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
      }}>
        <Tabs.Screen name="dictionary" options={{
          headerShown: false, title: "Dictionary", tabBarIcon: ({ color, focused }) =>
            <TabIcon name="Dictionary" color={color} icon={dictionaryIcon} focused={focused}  />
        }} />
        <Tabs.Screen name="addWords" options={{
          headerShown: false, title: "Add Words", tabBarIcon: ({ color, focused }) =>
            <TabIcon name="Add Words" color={color} icon={addWordsIcon} focused={focused} />
        }} />
        <Tabs.Screen name="settings" options={{
          headerShown: false, title: "Settings", tabBarIcon: ({ color, focused }) =>
            <TabIcon name="Settings" color={color} icon={settingsIcon} focused={focused} />
        }} />
      </Tabs>
    </>
  )
}

export default TabsLayout