/**
 * Loading Icon
 */

import React from 'react';
import { Animated, Easing, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        // To enable smooth animation in Android
        useNativeDriver: true,
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View
        style={{ transform: [{ rotate: spin}] }}
      >
        <Icon name='loading' type='material-community' />
      </Animated.View>
    )
  }
}

export default Loading;
