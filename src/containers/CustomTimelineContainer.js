/**
 * Custom Version
 */

import React from 'react';
import { connect } from  'react-redux';
import CustomTimeline from '../components/CustomTimeline';
import { toggledMenu } from '../actions/headerActions';
import { getTwitterData } from '../actions/twitterActions';

const mapStateToProps = (state) => {
  return {
    menuClicked: state.header.menuClicked,
    data: state.twitter.data,
    error: state.twitter.error,
  }
}

const mapDispatchToProps = dispatch => ({
  toggledMenu: () => dispatch(toggledMenu()),
  getData: () => dispatch(getTwitterData()),
});

class CustomTimelineContainer extends React.Component {
  static navigationOptions = {
    title: 'Custom Version',
  };

  constructor(props) {
    super(props);
    const { getData } = props;
    getData();
  }

  componentWillReceiveProps(nextProps) {
    const { menuClicked } = nextProps;
    const { navigation, toggledMenu } = this.props;
    if (menuClicked) {
      navigation.toggleDrawer();
      toggledMenu();
    }
  }

  render() {
    const { data } = this.props;
    return <CustomTimeline data={data} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTimelineContainer);
