import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';
import Button from './../reusable/Button';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%'
    },
    title: {
        color: Colors.GREEN
    },
    date: {
        paddingTop: Padding.MEDIUM,
        paddingBottom: Padding.MEDIUM
    }
});
export default class TalkDetail extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonTap = () => {
            // Linking.openURL(this.props.talk.slidesURL)
            this.setState({ isUserAttending: true });
        };
        this.state = {
            isUserAttending: false
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.title }, this.props.talk.title),
            React.createElement(Text, { style: styles.date }, moment(this.props.talk.date).format('LT')),
            React.createElement(Button, { text: 'Going', onButtonTap: this.onButtonTap, isButtonActive: this.state.isUserAttending })));
    }
}
//# sourceMappingURL=TalkDetail.js.map