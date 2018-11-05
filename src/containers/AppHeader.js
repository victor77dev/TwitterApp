/**
 * App Header
 */

import React from 'react';
import { connect } from  'react-redux';
import { StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { clickMenu } from '../actions/headerActions';

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = dispatch => ({
  clickMenu: () => dispatch(clickMenu()),
});

const MenuButton = (props) => {
  const { clickMenu } = props;
  return (
    <Icon
      name='menu'
      color='#fff'
      underlayColor='grey'
      onPress={clickMenu}
    />
  );
};

class AppHeader extends React.Component {
  render() {
    const { clickMenu } = this.props;
    return (
      <View style={styles.header}>
        <Header
          leftComponent={<MenuButton clickMenu={clickMenu} />}
          centerComponent={{ text: ` Blockchain AG`, style: { color: '#fff' } }}
        />
      </View>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
