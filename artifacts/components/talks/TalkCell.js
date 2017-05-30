import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { selectTalk } from '../../reducers/talk_selection';
import { SpeakerView, TalkDetail, ExpandedTalkDetail } from './';
import { Cell } from '../reusable';
import * as Colors from '../../constants/style/colors';
import * as Padding from '../../constants/style/padding';
import * as Animations from '../../constants/style/animations';
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
class TalkCell extends React.Component {
    componentWillUpdate() {
        LayoutAnimation.configureNext(Animations.CustomLayoutSpring);
    }
    render() {
        const { talk } = this.props;
        return (React.createElement(TouchableWithoutFeedback, { key: talk.id, onPress: () => this.props.actions.selectTalk(this.props.talk.id) },
            React.createElement(View, null,
                React.createElement(Cell, null, this.renderTalk()))));
    }
    renderTalk() {
        const { talk, isExpanded } = this.props;
        if (isExpanded) {
            return (React.createElement(View, { style: _.assign({}, styles.container, { flexDirection: 'column' }) },
                React.createElement(ExpandedTalkDetail, { talk: talk }),
                React.createElement(SpeakerView, { speaker: talk.speaker, hideDetail: false })));
        }
        else {
            return (React.createElement(View, { style: styles.container },
                React.createElement(SpeakerView, { speaker: talk.speaker, hideDetail: true }),
                React.createElement(TalkDetail, { talk: talk })));
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    const isExpanded = state.selectedTalk.id === ownProps.talk.id;
    return { isExpanded };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ selectTalk }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TalkCell);
//# sourceMappingURL=TalkCell.js.map