import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'

interface Props extends React.Props<View> {
  display: boolean
}

interface State {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT
  }
})

export default class Loader extends React.Component<Props, State> {

  render() {
    const pointerEvent = this.props.display ? 'box-only' : 'none'
    return (
      <View
      style={styles.container}
      pointerEvents={pointerEvent}>
      { this.props.display ? <ActivityIndicator color={Colors.GREEN} /> : undefined }
      </View>
    )
  }

}
