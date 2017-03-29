/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Todo_react extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo_react', () => Todo_react);





// class Todo_react extends Component {
//   clickMe() {
//     alert('Hi!');
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this.clickMe.bind(this)}>
//           <View style={styles.box}>
//             <Text>Hello {this.props.name}. Please click me.</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box: {
//     borderColor: 'red',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     padding: 10,
//     width: 100,
//     height: 100
//   }
// });

// var MainComponent = function() {
//   this.render = function() {
//     return <HelloThere name="Component" />;
//   }
// };

// AppRegistry.registerComponent('Todo_react', () => Todo_react);

