import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../App'
import { useAsync }from 'react-async-hook'

const fetchUserData = async (): Promise<any> => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if (!resp.ok) {
    throw new Error('Failed to get user info')
  }
  return resp.json()
}

const RAHDemo = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>()

  const { loading, error, result } = useAsync(fetchUserData, [])

  return (
    <View>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      { loading && (
        <Text>Loading...</Text>
      )}

      { error && (
        <Text>Error: {error.message}</Text>
      )}

      { result && (
        <View>
          <Text>User Data: {JSON.stringify(result, null, 2)}</Text>
        </View>
      )}
    </View>
  )
}

export default RAHDemo