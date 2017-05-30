import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginTitle from '../components/login/LoginTitle'
import LoginForm from '../components/login/LoginForm'
import { emailLogin } from '../reducers/auth'
import { Loader } from '../components/reusable'
// import * as Colors from '../constants/style/colors'
import * as Padding from '../constants/style/padding'

interface Props extends React.Props<View> {
    actions: { emailLogin: any },
    isLoading: boolean,
    loginFailed: boolean,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Padding.EXTRA_LARGE,
    height: '100%'
  }
})

class LoginPresenter extends React.Component<Props, {}> {

  showError() {
    if (!this.props.loginFailed) return undefined
    return <Text>Login failed. Please check your credentials.</Text>
  }

  render() {
    console.log('Outside button press')
    console.log(this.props)

    return (
      <View style={styles.container}>
        <LoginTitle />
        <Loader display={this.props.isLoading} />
        <LoginForm onButtonPress={
          () => {
            console.log('Inside button press')
            console.log(this.props)
            return this.props.actions.emailLogin('asdfasdf@fasdafa.co', 'asdfasdf')
          }
        }/>
        {this.showError}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  loginFailed: state.auth.loginFailed
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ emailLogin }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPresenter)