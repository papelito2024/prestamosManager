
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
                    <Text className="text-3xl  text-center mt-10 mb-10 font-semibold">Generar Prestamo</Text>

                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="Cantidad Solicitada" />
                    </View>

                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="Modalidad de Cobro" />
                    </View>
                    <View className="mb-6">
                        <TextInput
                            mode="outlined"
                            label="Modalidad de Pago" />
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