import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import moment from 'moment'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'
import Talk from './../../models/talk'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: Padding.MEDIUM
  },
  title: {
    color: Colors.GREEN,
    fontSize: 14,
    fontWeight: 'bold'
  },
  date: {
    color: Colors.BLACK,
    fontSize: 12,
    paddingTop: Padding.MEDIUM
  },
  description: {
    color: Colors.BLACK,
    fontStyle: 'italic',
    fontSize: 12,
    paddingTop: Padding.MEDIUM,
    textAlign: 'center'
  }
})

interface Props extends React.Props<View> {
  talk: Talk
}
export default class ExpandedTalkDetail extends React.Component<Props, {}> {
  render() {
    const { talk } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{talk.title}</Text>
        <Text style={styles.date}>{moment(talk.date).calendar()}</Text>
        <Text style={styles.description}>{talk.description}</Text>
      </View>
    )
  }
}