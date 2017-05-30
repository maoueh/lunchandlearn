import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    text: {
        padding: Padding.EXTRA_SMALL
    }
});
export default class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.styles = StyleSheet.create({
            container: {
                backgroundColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
                borderColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
                borderWidth: 5,
                borderRadius: 50,
                width: 150,
                alignItems: 'center'
            }
        });
    }
    render() {
        return (React.createElement(TouchableOpacity, { onPress: this.props.onButtonTap, style: this.styles.container },
            React.createElement(Text, { style: styles.text }, this.props.text)));
    }
}
//# sourceMappingURL=Button.js.map