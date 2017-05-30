import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: Colors.BLACK,
        // textAlign: 'center',
        fontFamily: 'Futura-MediumItalic',
        padding: Padding.MEDIUM
    }
});
export default class LoginTitle extends React.Component {
    render() {
        return React.createElement(Text, { style: styles.title }, `Welcome to\nLunch & Learn`);
    }
}
//# sourceMappingURL=LoginTitle.js.map