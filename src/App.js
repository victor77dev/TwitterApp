/**
 * Twitter App
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import CustomTimelineContainer from './containers/CustomTimelineContainer';
import EmbedTimelineContainer from './containers/EmbedTimelineContainer';
import AppHeader from './containers/AppHeader';

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
  CustomTimeline: { screen: CustomTimelineContainer },
  EmbedTimeline: { screen: EmbedTimelineContainer },
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