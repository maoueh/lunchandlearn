import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.LIGHT_GREY,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: Padding.MEDIUM,
    marginRight: Padding.MEDIUM,
    marginTop: Padding.SMALL,
    marginBottom: Padding.EXTRA_SMALL
  }
})

interface Props extends React.Props<View> {}
interface State {}

export default class Cell extends React.Component<Props, State> {
  render() {
      return <View style={styles.container}>
        {this.props.children}
      </View>
  }
}
