import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Button from './../reusable/Button'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'
import Talk from './../../models/fakeTalk'

interface Props extends React.Props<View> {
  talk: Talk
}

interface State {
  isUserAttending: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%'
  },
  title: {
    color: Colors.GREEN
  },
  date: {
    paddingTop: Padding.MEDIUM,
    paddingBottom: Padding.MEDIUM
  }
})

export default class TalkDetail extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      isUserAttending: false
    }
  }

  onButtonTap = () => {
    // console.log(this.props.talk.slidesURL)
    // Linking.openURL(this.props.talk.slidesURL)
    this.setState({isUserAttending: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          { this.props.talk.title }
        </Text>
        
        <Text style={styles.date}>
          { this.props.talk.date }
        </Text>

        <Button
        onButtonTap={this.onButtonTap}
        isButtonActive={this.state.isUserAttending}/>
      </View>
    )
  }
}