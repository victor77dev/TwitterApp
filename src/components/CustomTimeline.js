/**
 * Custom Version
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
  },
});

class CustomTimeline extends React.Component {
  static navigationOptions = {
    title: 'Custom Version',
  };

  render() {
    const { data } = this.props;
    return (
      <View>
        <Text>
          Under Construction
          {JSON.stringify(data)}
        </Text>
      </View>
    );
  }
}

export default CustomTimeline;
