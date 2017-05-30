import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import * as Padding from '../../constants/style/padding'
import * as Colors from '../../constants/style/colors'

const styles = StyleSheet.create({
  field: {
    paddingLeft: Padding.MEDIUM,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: Colors.GREEN
  },
  invalidField: {
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: Padding.MEDIUM,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: 'red'
  }
})

interface Props extends React.Props<View> {
  value: string
  onChangeText: (text: string) => void
  placeholder: string
  isEmail: boolean
  secureTextEntry: boolean,
  isValid: boolean
}

export default class TextField extends React.Component<Props, {}> {
  render() {
    return (
      <View> 
        <TextInput
          style={this.props.isValid ? styles.field : styles.invalidField}
          keyboardType={this.props.isEmail ? 'email-address' : 'default'}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}>
        </TextInput>
      </View>
    )
  }
}