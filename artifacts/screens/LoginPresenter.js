import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginTitle from '../components/login/LoginTitle';
import LoginForm from '../components/login/LoginForm';
import { emailLogin } from '../reducers/auth';
import { Loader } from '../components/reusable';
// import * as Colors from '../constants/style/colors'
import * as Padding from '../constants/style/padding';
const styles = StyleSheet.create({
    container: {
        paddingTop: Padding.EXTRA_LARGE,
        height: '100%'
    }
});
class LoginPresenter extends React.Component {
    showError() {
        if (!this.props.loginFailed)
            return undefined;
        return React.createElement(Text, null, "Login failed. Please check your credentials.");
    }
    render() {
        console.log('Outside button press');
        console.log(this.props);
        return (React.createElement(View, { style: styles.container },
            React.createElement(LoginTitle, null),
            React.createElement(Loader, { display: this.props.isLoading }),
            React.createElement(LoginForm, { onButtonPress: () => {
                    console.log('Inside button press');
                    console.log(this.props);
                    return this.props.actions.emailLogin('asdfasdf@fasdafa.co', 'asdfasdf');
                } }),
            this.showError));
    }
}
const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    loginFailed: state.auth.loginFailed
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ emailLogin }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPresenter);
//# sourceMappingURL=LoginPresenter.js.map