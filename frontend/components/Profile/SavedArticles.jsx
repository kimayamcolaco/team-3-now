import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';

export default class SavedArticles extends React.Component {
    render () {
        return (
            <ScrollView style={{flex:1}}>
                <Text> Saved Articles Go Here </Text>
            </ScrollView>

        );
    }
}