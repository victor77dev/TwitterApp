/**
 * App Header
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});

const MenuButton = () => {
  return (
    <Icon
      name='menu'
      color='#fff'
    />
  );
};

class AppHeader extends React.Component {
  render()
  {
    return (
      <View style={styles.header}>
        <Header
          leftComponent={<MenuButton />}
          centerComponent={{ text: ` Blockchain AG`, style: { color: '#fff' } }}
        />
      </View>
    )

  }
}

export default AppHeader;
