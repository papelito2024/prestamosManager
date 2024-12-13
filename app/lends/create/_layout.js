import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <Stack>

            <Stack.Screen name='lend' options={{
                headerShown: false
            }} />
            <Stack.Screen name='client' options={{
                headerShown: false
            }} />
        </Stack>
    )
}

const styles = StyleSheet.create({})