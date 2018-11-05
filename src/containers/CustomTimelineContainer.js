/**
 * Custom Version
 */

import React from 'react';
import { connect } from  'react-redux';
import CustomTimeline from '../components/CustomTimeline';
import { toggledMenu } from '../actions/headerActions';

const mapStateToProps = (state) => {
  return {
    menuClicked: state.header.menuClicked,
  }
}

const mapDispatchToProps = dispatch => ({
  toggledMenu: () => dispatch(toggledMenu()),
});

class CustomTimelineContainer extends React.Component {
  static navigationOptions = {
    title: 'Custom Version',
  };

  componentWillReceiveProps(nextProps) {
    const { menuClicked } = nextProps;
    const { navigation, toggledMenu } = this.props;
    if (menuClicked) {
      navigation.toggleDrawer();
      toggledMenu();
    }
  }

  render() {
    return <CustomTimeline />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTimelineContainer);
