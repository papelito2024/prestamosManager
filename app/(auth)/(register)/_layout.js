import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <Stack>

            <Stack.Screen name='step1' options={{
                headerShown: false
            }} />
            <Stack.Screen name='step2' options={{
                headerShown: false
            }} />
            <Stack.Screen name='step3' options={{
                headerShown: false
            }} />
        </Stack>
    )
}

const styles = StyleSheet.create({})