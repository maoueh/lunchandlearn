import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const imageWidth = 70;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TRANSPARENT,
        alignItems: 'center'
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        borderRadius: imageWidth / 2
    },
    name: {
        paddingTop: Padding.SMALL,
        fontSize: 12
    },
    title: {
        paddingTop: Padding.SMALL,
        paddingBottom: Padding.SMALL,
        fontSize: 12
    }
});
export default class SpeakerView extends React.Component {
    getDetail() {
        const { speaker } = this.props;
        if (this.props.hideDetail)
            return undefined;
        return React.createElement(Text, { style: styles.title }, speaker.position);
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { style: styles.image, source: { uri: this.props.speaker.picture } }),
            React.createElement(Text, { style: styles.name }, this.props.speaker.nickname),
            this.getDetail()));
    }
}
//# sourceMappingURL=SpeakerView.js.map