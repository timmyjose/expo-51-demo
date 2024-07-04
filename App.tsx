import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import * as Sentry from '@sentry/react-native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home'
import SentryDemo from './components/SentryDemo'
import RAHDemo from './components/RAHDemo'
import CameraDemo from './components/CameraDemo'

Sentry.init({
  dsn: 'https://5171b01612800bbfb478898d89c49f27@o235927.ingest.us.sentry.io/4506813433249792',
  enabled: !__DEV__
})

export type RootStackParamsList = {
  Home: undefined
  SentryDemo: undefined
  RAHDemo: undefined
  CameraDemo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SentryDemo' component={SentryDemo} />
        <Stack.Screen name='RAHDemo' component={RAHDemo} />
        <Stack.Screen name='CameraDemo' component={CameraDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Sentry.wrap(App)
