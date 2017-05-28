import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

interface Props extends React.Props<View> {
  date: Date
}

interface State {}

const styles = StyleSheet.create ({
  viewStyle: {
    backgroundColor: Colors.WHITE,
    height: Padding.MEDIUM,
    justifyContent: 'center',
    paddingLeft: Padding.MEDIUM
  },
  textStyle: {
    fontSize: 14
  }
})
export class DateListHeader extends React.Component<Props, State> {
  render() {
    return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{ this.props.date.toString }</Text>
    </View>
    )
  }
}