/**
 * Embed Version
 */

import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

const styles = StyleSheet.create({
  twitter: {
    flex: 1,
    width: '100%',
  },
});

class EmbedTimeline extends React.Component {
  render() {
    const twitterEmbedTag = `<a class="twitter-timeline" href="https://twitter.com/BlockchainAG?ref_src=twsrc%5Etfw">Embed Tweets by BlockchainAG</a>`;
    const twitterEmbedScript = `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    return (
      <View style={styles.twitter}>
        <WebView
          source={{html: `${twitterEmbedTag}${twitterEmbedScript}`}}
        />
      </View>
    );
  }
}

export default EmbedTimeline;
