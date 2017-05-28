import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.WHITE,
        height: Padding.MEDIUM,
        justifyContent: 'center',
        paddingLeft: Padding.MEDIUM
    },
    textStyle: {
        fontSize: 14
    }
});
export class DateListHeader extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.viewStyle },
            React.createElement(Text, { style: styles.textStyle }, this.props.date.toString)));
    }
}
//# sourceMappingURL=DateListHeader.js.map