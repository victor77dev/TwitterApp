/**
 * Embed Version
 */

import React from 'react';
import { connect } from  'react-redux';
import EmbedTimeline from '../components/EmbedTimeline';
import { toggledMenu } from '../actions/headerActions';

const mapStateToProps = (state) => {
  return {
    menuClicked: state.header.menuClicked,
  }
}

const mapDispatchToProps = dispatch => ({
  toggledMenu: () => dispatch(toggledMenu()),
});

class EmbedTimelineContainer extends React.Component {
  static navigationOptions = {
    title: 'Embed Version',
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
    return <EmbedTimeline />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmbedTimelineContainer);
