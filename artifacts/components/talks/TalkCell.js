import React from 'react';
import { View, StyleSheet } from 'react-native';
import SpeakerView from './SpeakerView';
import TalkDetail from './TalkDetail';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: Padding.MEDIUM,
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: Colors.LIGHT_GREY,
        position: 'relative'
    }
});
export default class TalkCell extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(SpeakerView, { speaker: this.props.talk }),
            React.createElement(TalkDetail, { talk: this.props.talk })));
    }
}
//# sourceMappingURL=TalkCell.js.map