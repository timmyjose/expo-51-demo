import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../App'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>()

  return (
    <View style={styles.container}>
      <Button title='Sentry Demo' onPress={() => navigation.navigate('SentryDemo')} />
      <Button title='react-async-hook-demo' onPress={() => navigation.navigate('RAHDemo')} />
      <Button title='Camera Demo' onPress={() => navigation.navigate('CameraDemo')} />
      <Button title='Barcode Demo' onPress={() => navigation.navigate('BarcodeDemo')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home