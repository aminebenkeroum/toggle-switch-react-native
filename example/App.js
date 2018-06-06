/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

export default class App extends Component<{}> {
  state = {
    isOnDefaultToggleSwitch: false,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,
  };

  onToggle(isOn){
    alert('Changed to ' + isOn)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Example Toggle Switch
        </Text>
        <Text style={styles.instructions}>
          Default Toggle
        </Text>
        <ToggleSwitch
          label="Hello"
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
            this.onToggle(isOnDefaultToggleSwitch);
          }}
        />
        <Text style={styles.instructions}>
          Default Toggle Large
        </Text>
        <ToggleSwitch
          label="Hello"
          size="large"
          isOn={this.state.isOnLargeToggleSwitch}
          onToggle={isOnLargeToggleSwitch => {
            this.setState({ isOnLargeToggleSwitch });
            this.onToggle(isOnLargeToggleSwitch);
          }}
        />
        <Text style={styles.instructions}>
          Change On Color
        </Text>
        <ToggleSwitch
          label="Hello"
          onColor="#2196F3"
          isOn={this.state.isOnBlueToggleSwitch}
          onToggle={isOnBlueToggleSwitch => {
            this.setState({ isOnBlueToggleSwitch });
            this.onToggle(isOnBlueToggleSwitch);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
