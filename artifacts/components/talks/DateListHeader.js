import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
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
        fontSize: 14,
        color: Colors.BLACK
    }
});
export default class DateListHeader extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.viewStyle },
            React.createElement(Text, { style: styles.textStyle }, moment(this.props.date).calendar())));
    }
}
//# sourceMappingURL=DateListHeader.js.map