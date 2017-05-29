import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: Padding.MEDIUM
    },
    title: {
        color: Colors.GREEN,
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        color: Colors.BLACK,
        fontSize: 12,
        paddingTop: Padding.MEDIUM
    },
    description: {
        color: Colors.BLACK,
        fontStyle: 'italic',
        fontSize: 12,
        paddingTop: Padding.MEDIUM,
        textAlign: 'center'
    }
});
export default class ExpandedTalkDetail extends React.Component {
    render() {
        const { talk } = this.props;
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.title }, talk.title),
            React.createElement(Text, { style: styles.date }, moment(talk.date).calendar()),
            React.createElement(Text, { style: styles.description }, talk.description)));
    }
}
//# sourceMappingURL=ExpandedTalkDetail.js.map