import { View, StyleSheet, Button, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../App'
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera'
import QRCode from 'react-qr-code'

const BarcodeDemo = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>()

  const [scannedData, setScannedData] = useState<string>('')
  const [permission, requestPermission] = useCameraPermissions()

  const onBarcodeScanned = async (event: BarcodeScanningResult) => {
    console.log('Barcode scanning result = ', event.data)
    setScannedData(event.data)
  }

  return (
    <View style={styles.container}>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      <View style={styles.qrcode}>
        <QRCode value='Hello, expo-sdk-51-demo' size={128}/>
      </View>
      { !permission || !permission.granted && (
        <View style={styles.qrcode}>
          <Text>Allow camera access</Text>
          <Button title='Request' onPress={requestPermission} />
        </View>
      )}
      { permission && (
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            onBarcodeScanned={onBarcodeScanned}
            facing='back'
          />
          <Text>Scanned Data: {scannedData}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  qrcode: {
    margin: 10
  },
  cameraContainer: {
    flex: 1,
    width: '100%'
  },
  camera: {
    flex: 1,
  }
})

export default BarcodeDemo