import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Link href="/addWords">
        <Text>AddWords</Text>
      </Link>
    </SafeAreaView>
  )
}

export default App