import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

const Step3 = () => {

    const router = useRouter();

    return (
        <SafeAreaView className="h-full justify-center   ">
            <ScrollView>
                <View className="  px-4 my-6">
                    <Image></Image>
                    <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Crea una contraseña segura</Text>

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




                    <View className="flex-1 flex-row flex-initial gap-5 flex-wraps mb-6">
                        <Button icon="" style={{
                            flex: 1,
                            borderRadius: 3,
                            padding: 5
                        }} mode="contained" onPress={() => router.push({
                            pathname: "/step2",
                         
                        })}>
                            atras
                        </Button>
                        <Button icon="" style={{
                            flex: 1,
                            borderRadius: 3,
                            padding: 5
                        }} mode="contained" onPress={() => console.log("terminar")}>
                            terminar
                        </Button>
                    </View>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Step3

const styles = StyleSheet.create({})