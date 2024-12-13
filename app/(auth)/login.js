import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {  SafeAreaView, ScrollView } from 'react-native-web'
import { TextInput ,Button} from 'react-native-paper';
import { Link } from 'expo-router';

const Login = () => {
  return (

    <SafeAreaView className="h-full justify-center   ">
        <ScrollView>
            <View className="  px-4 my-6">
              <Image></Image>
              <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Loggeate en tu cuenta</Text>
              
          <View className="mb-6">
            <TextInput
              mode="outlined"
              label="Email" />
             </View>

             <View className="mb-6">
              <TextInput
              mode="outlined"
                label="Password"
                secureTextEntry
              error={false}
              outlineColor='green'
              onChangeText={text => console.log(text)}
                className="" />
             </View>

              <View >
            <Button icon="" style={{
             
              borderRadius:3,
              padding:5
            }} mode="contained" onPress={() => console.log('Pressed')}>
              Entrars
            </Button>
              </View>
          <Text className="mt-6">
            No tienes cuenta?
            <Link href="/step1" className='text-purple-600'> crear cuenta</Link>
            </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
   
  )
}

export default Login

const styles = StyleSheet.create({})