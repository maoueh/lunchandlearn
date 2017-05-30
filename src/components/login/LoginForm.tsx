import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Cell, TextField } from '../reusable'
import { isEmailValid, isNotEmpty } from '../../helpers/validation'
import PropTypes from 'prop-types'
import * as Padding from '../../constants/style/padding'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    paddingTop: Padding.MEDIUM,
    paddingBottom: Padding.MEDIUM
  }
})

interface Props extends React.Props<View> {
  onButtonPress: PropTypes.func.isRequired
}

interface State {
  email: string,
  password: string,
  isEmailValid: boolean,
  isPasswordValid: boolean
}

export default class LoginForm extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true
    }
  }
  onEmailChange = (email: string) => {
      this.setState({ email, isEmailValid: true })
  }

  onPasswordChange = (password: string) => {
    this.setState({password})
  }

  fieldsAreInvalid(): boolean {
    const { isEmailValid, isPasswordValid } = this.state
    return !(isEmailValid && isPasswordValid)
  }

  onButtonTap = () => {
    this.setState({
      isPasswordValid: isNotEmpty(this.state.password),
      isEmailValid: isEmailValid(this.state.email)
    })
    if (this.fieldsAreInvalid) return
    this.props.onButtonPress()
  }

  render() {
    return (
      <View>
        <Cell>
        <TextField
          value={this.state.email}
          onChangeText={this.onEmailChange}
          placeholder='Email'
          isEmail={true}
          secureTextEntry={false}
          isValid={this.state.isEmailValid} />
        </Cell>
        <Cell>
        <TextField
          value={this.state.password}
          onChangeText={this.onPasswordChange}
          placeholder='Password'
          isEmail={false}
          secureTextEntry={true}
          isValid={this.state.isPasswordValid} />
        </Cell>
        <View style={styles.button}>
          <Button
            text={'Log In'}
            onButtonTap={this.props.onButtonPress}
            isButtonActive={true} />
        </View>
      </View>
    )
  }
}