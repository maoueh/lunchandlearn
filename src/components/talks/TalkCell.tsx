import React from 'react'
import { View, StyleSheet } from 'react-native'
import SpeakerView from './SpeakerView'
import TalkDetail from './TalkDetail'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

import Talk from '../../models/talk'

interface Props extends React.Props<View> {
  talk: Talk
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Padding.MEDIUM,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: Colors.LIGHT_GREY,
    position: 'relative'
  }
})
export default class TalkCell extends React.Component<Props, {}> {
  render() {
    return (
      <View style={styles.container}>
        <SpeakerView speaker={this.props.talk.speaker}/>
        <TalkDetail talk ={this.props.talk}/>
      </View>
  )
  }
}
