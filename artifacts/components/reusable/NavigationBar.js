import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18
    },
    viewStyle: {
        backgroundColor: Colors.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: Padding.MEDIUM,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});
export default class NavigationBar extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.viewStyle },
            React.createElement(Text, { style: styles.textStyle }, this.props.name)));
    }
}
//# sourceMappingURL=NavigationBar.js.map