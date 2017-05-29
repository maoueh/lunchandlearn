import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

import Speaker from '../../models/speaker'

interface Props extends React.Props<View> {
  speaker: Speaker,
  hideDetail: boolean
}

interface State {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  text: {
    paddingTop: Padding.SMALL,
    fontSize: 12
  }
})
export default class SpeakerView extends React.Component<Props, State> {

  getDetail() {
    const { speaker } = this.props
    if (this.props.hideDetail) return undefined
    return <Text style={styles.text}>{speaker.position}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.speaker.picture}}/>

        <Text style={styles.text}>
          {this.props.speaker.nickname}
        </Text>
        {this.getDetail()}
      </View>
    )
  }

}