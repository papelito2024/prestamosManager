
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native-web'
import { TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';

const CreateLend = () => {
    return (

        <SafeAreaView className="h-full justify-center   ">
            <ScrollView>
                <View className="  px-4 my-6">
                    <Image></Image>
                    <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Crear Cliente</Text>
                    
                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="dni" />
                    </View>
                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="Nombre" />
                        <TextInput
                            mode="outlined"
                            label="Apellido" />
                    </View>

                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="direccion domicilio" />
                    </View>
                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="genero/sexo" />
                    </View>
                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="fecha/Nac" />
                    </View>


                    <View >
                        <Button icon="" style={{

                            borderRadius: 3,
                            padding: 5
                        }} mode="contained" onPress={() => console.log('Pressed')}>
                            Siguiente
                        </Button>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default CreateLend

const styles = StyleSheet.create({})