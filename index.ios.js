/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import * as firebase from 'firebase';
//improrted files
const StatusBar = require('./components/StatusBar');
const AddButton = require('./components/AddButton');
const ListItem = require('./components/ListCreation');
const SearchBar = require('./components/SearchBar');
const styles = require('./styles');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  AlertIOS,
  TouchableHighlight
} from 'react-native';


// Initialize Firebase: const is a read only reference to a value, which makes since here, because you don't want to override the value of firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCEm79u7h_lb1W-xrnil5g411ZRXHJpOJg",
    authDomain: "todo-653ec.firebaseapp.com",
    databaseURL: "https://todo-653ec.firebaseio.com",
    storageBucket: "todo-653ec.appspot.com",
    messagingSenderId: "386713353133"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Root component responsible for rendering list

 class Todo_react extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2})
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <AddButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.prompt(
        'Edit or Delete Item',
        null,
        [
          {text: 'Edit', onPress: (text) => this.itemsRef.child(item._key).update({title: text})},
          {text: 'Delete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

 }

AppRegistry.registerComponent('Todo_react', () => Todo_react);
