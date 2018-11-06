/**
 * Custom Version
 */

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Tweet from './Tweet';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
  },
});

const Loading = () => {
  return (
    <Text>Loading</Text>
  )
}

class CustomTimeline extends React.Component {
  static navigationOptions = {
    title: 'Custom Version',
  };

  render() {
    const { data } = this.props;
    return (
      <View>
        {
          data === null
          ? <Loading />
          : <FlatList
              data={data}
              renderItem={({item}) => {
                return <Tweet tweet={item} />
              }}
              keyExtractor={(item) => `${item.id}`}
            />
        }
      </View>
    );
  }
}

export default CustomTimeline;
