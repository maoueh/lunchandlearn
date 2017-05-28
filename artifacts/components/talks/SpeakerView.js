import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TRANSPARENT,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    text: {
        paddingTop: Padding.SMALL,
        fontSize: 12
    }
});
export default class SpeakerView extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { style: styles.image, source: { uri: this.props.speaker.speakerPhoto } }),
            React.createElement(Text, { style: styles.text }, this.props.speaker.speaker)));
    }
}
//# sourceMappingURL=SpeakerView.js.map