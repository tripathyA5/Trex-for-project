import React, { Component} from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, Dimensions } from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view'

export default class SwipeableFlatList extends Components{
constrcutor(props){
    super(props);
    this.state={
        allNotifications: this.props.allNotifications
    }
}
    onSwpieValueChange(){

    }
    render(){
        return(
            <Text>
                FlatList
            </Text>
        )
    }
}
