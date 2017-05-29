import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Cell from './Cell';
import * as actions from '../../actions';
import SpeakerView from './SpeakerView';
import TalkDetail from './TalkDetail';
import ExpandedTalkDetail from './ExpandedTalkDetail';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
const styles = StyleSheet.create({
    reduced: {
        alignItems: 'center',
        padding: Padding.MEDIUM,
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: Colors.LIGHT_GREY,
        position: 'relative'
    },
    expanded: {
        alignItems: 'center',
        padding: Padding.MEDIUM,
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderColor: Colors.LIGHT_GREY,
        position: 'relative'
    }
});
class TalkCell extends React.Component {
    render() {
        const { talk } = this.props;
        return (React.createElement(TouchableWithoutFeedback, { key: talk.title, onPress: () => this.props.selectTalk(talk.id) },
            React.createElement(Cell, null, this.renderTalk())));
    }
    renderTalk() {
        const { talk, isExpanded } = this.props;
        if (isExpanded) {
            return (React.createElement(View, { style: styles.expanded },
                React.createElement(ExpandedTalkDetail, { talk: talk }),
                React.createElement(SpeakerView, { speaker: talk.speaker, hideDetail: false })));
        }
        else {
            return (React.createElement(View, { style: styles.reduced },
                React.createElement(SpeakerView, { speaker: talk.speaker, hideDetail: true }),
                React.createElement(TalkDetail, { talk: talk })));
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    const isExpanded = state.selectedTalkId === ownProps.talk.id;
    return { isExpanded };
};
export default connect(mapStateToProps, actions)(TalkCell);
//# sourceMappingURL=TalkCell.js.map