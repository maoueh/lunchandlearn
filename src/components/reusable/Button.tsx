import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

interface Props extends React.Props<View> {
  onButtonTap: () => void
  isButtonActive: boolean
}

const styles = StyleSheet.create({

  text: {
    padding: Padding.EXTRA_SMALL
  }
})
export default class Button extends React.Component<Props, {}> {

  styles = StyleSheet.create({
    container: {
      backgroundColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
      borderColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
      borderWidth: 5,
      borderRadius: 50,
      width: 150,
      alignItems: 'center'
    }
  })

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onButtonTap}
        style={this.styles.container}>
        <Text style={styles.text}>Open Slides</Text>
      </TouchableOpacity>
    )
  }
}