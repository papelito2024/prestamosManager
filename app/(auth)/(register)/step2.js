import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

const Step2 = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  console.log(params)

  return (
    <SafeAreaView className="h-full justify-center   ">
      <ScrollView>
        <View className="  px-4 my-6">
          <Image></Image>
          <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Ingresa El codigo de verificacion</Text>

          <View className="flex-1 flex-row flex-initial gap-5 flex-wraps mb-6">
            <TextInput style={{ flex: 1,textAlign:"center",fontSize:17 }}
              mode="outlined"
              maxLength={1}
              inputMode='numeric'
              keyboardType='numeric'
               />
            <TextInput style={{ flex: 1, textAlign: "center", fontSize: 17 }}
              mode="outlined"
              maxLength={1}
            />
            <TextInput style={{ flex: 1, textAlign: "center", fontSize: 17 }}
              mode="outlined"
              maxLength={1}
            />
            <TextInput style={{ flex: 1, textAlign: "center", fontSize: 17 }}
              mode="outlined"
              maxLength={1}
            />
          </View>



          <View className="flex-1 flex-row flex-initial gap-5 flex-wraps mb-6">
            <Button icon="" style={{
              flex: 1,
              borderRadius: 3,
              padding: 5
            }} mode="contained" onPress={() => router.push({
              pathname: "/step1",
              params: { id: 3 }
            })}>
              atras
            </Button>
            <Button icon="" style={{
              flex:1,
              borderRadius: 3,
              padding: 5
            }} mode="contained" onPress={() => router.push({
              pathname:"/step3",
              params:{id:3}
            })}>
              siguiente
            </Button>
          </View>
          <Text className="mt-6">
            No recibiste el email?  <Link className='text-purple-600' href="/login">reenviar email</Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step2

const styles = StyleSheet.create({})