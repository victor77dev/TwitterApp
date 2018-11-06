/**
 * Tweet
 */

import React from 'react';
import { Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const Tweet = (props) => {
  const { tweet } = props;
  const { id, text, time, username, retweet, orgUsername } = tweet;
  const tweetText = retweet ? text.replace(/RT @.*: /, '') : text;
  const title = retweet ? `Retweet ${orgUsername}` : username;
  return (
    <Card>
      <Text>
        {tweetText}
      </Text>
      <ListItem
        hideChevron
        containerStyle={{borderBottomColor: 'transparent'}}
        title={title}
        subtitle={time}
      />
    </Card>
  )
}

export default Tweet;
