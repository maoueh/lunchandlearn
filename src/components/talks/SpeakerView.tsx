import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

// import Speaker from '../../models/speaker'
import Talk from '../../models/fakeTalk'

interface Props extends React.Props<View> {
  speaker: Talk
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

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.speaker.speakerPhoto}}/>

        <Text style={styles.text}>
          {this.props.speaker.speaker}
        </Text>
      </View>
    )
  }

}