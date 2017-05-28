import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props extends React.Props<View> {
  text: string
}

interface State {}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%'
  }
})
export default class EmptyView extends React.Component<Props, State> {

  render() {
    return (
      <View>
        <View style={styles.view}><Text>{this.props.text}</Text></View>
      </View>
    )
  }

}