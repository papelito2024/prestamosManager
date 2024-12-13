import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,ScrollView} from 'react-native'
import { TextInput,Button } from 'react-native-paper'
import { Link, useRouter } from 'expo-router'

const Step1 = () => {

  const router = useRouter();

  return (
    <SafeAreaView className="h-full justify-center   ">
      <ScrollView>
        <View className="  px-4 my-6">
          <Image></Image>
          <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Agrega Una direccion de email</Text>

          <View className="mb-6">
            <TextInput
              mode="outlined"
              label="Email"
              onChangeText={(text)=>console.log(text)}
              />
          </View>
          <View  className="d-flex justify-end">
            <Button icon="" style={{
             
              borderRadius: 3,
              padding: 5
            }} mode="contained" onPress={() => router.push({
              pathname:"/step2",
              params:{id:2}
            })}>
             siguiente
            </Button>
          </View>
          
          <Text className="mt-6">
            Ir al  <Link href="/login" className='text-purple-600'>login</Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step1

const styles = StyleSheet.create({})