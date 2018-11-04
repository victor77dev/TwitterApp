/**
 * Twitter App
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import CustomTimeline from './components/CustomTimeline';
import EmbedTimeline from './components/EmbedTimeline';
import AppHeader from './components/AppHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});

const Screens = createDrawerNavigator({
  CustomTimeline: { screen: CustomTimeline },
  EmbedTimeline: { screen: EmbedTimeline },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <Screens />
      </View>
    );
  }
}

export default App;