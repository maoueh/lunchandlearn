import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Cell, TextField } from '../reusable';
import { isEmailValid, isNotEmpty } from '../../helpers/validation';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: '100%',
        paddingTop: Padding.MEDIUM,
        paddingBottom: Padding.MEDIUM
    }
});
export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChange = (email) => {
            this.setState({ email, isEmailValid: true });
        };
        this.onPasswordChange = (password) => {
            this.setState({ password });
        };
        this.onButtonTap = () => {
            this.setState({
                isPasswordValid: isNotEmpty(this.state.password),
                isEmailValid: isEmailValid(this.state.email)
            });
            if (this.fieldsAreInvalid)
                return;
            this.props.onButtonPress();
        };
        this.state = {
            email: '',
            password: '',
            isEmailValid: true,
            isPasswordValid: true
        };
    }
    fieldsAreInvalid() {
        const { isEmailValid, isPasswordValid } = this.state;
        return !(isEmailValid && isPasswordValid);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Cell, null,
                React.createElement(TextField, { value: this.state.email, onChangeText: this.onEmailChange, placeholder: 'Email', isEmail: true, secureTextEntry: false, isValid: this.state.isEmailValid })),
            React.createElement(Cell, null,
                React.createElement(TextField, { value: this.state.password, onChangeText: this.onPasswordChange, placeholder: 'Password', isEmail: false, secureTextEntry: true, isValid: this.state.isPasswordValid })),
            React.createElement(View, { style: styles.button },
                React.createElement(Button, { text: 'Log In', onButtonTap: this.props.onButtonPress, isButtonActive: true }))));
    }
}
//# sourceMappingURL=LoginForm.js.map