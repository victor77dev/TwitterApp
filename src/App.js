/**
 * Twitter App - Embed Version
 *
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';
import { Header } from 'react-native-elements';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const twitterEmbedTag = `<a class="twitter-timeline" href="https://twitter.com/BlockchainAG?ref_src=twsrc%5Etfw">Embed Tweets by BlockchainAG</a>`;
    const twitterEmbedScript = `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: `Advanced Blockchain AG`, style: { color: '#fff' } }}
          />
        </View>
        <View style={styles.twitter}>
          <WebView
            source={{html: `${twitterEmbedTag}${twitterEmbedScript}`}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  header: {
    width: '100%',
  },
  twitter: {
    flex: 1,
    width: '100%',
  },
});
