import React from 'react';
import { SectionList, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import TalkCell from './TalkCell';
import Cell from './Cell';
import DateListHeader from './DateListHeader';
export default class TalkView extends React.Component {
    constructor() {
        super(...arguments);
        this.dataSource = [];
    }
    splitTalksByDate(talks) {
        return grouped = _.transform(talks, function (result, talk) {
            (result[talk.date] || (result[talk.date] = [])).push(talk);
        }, {});
    }
    componentWillMount() {
        this.dataSource = this.splitTalksByDate(this.props.talks);
    }
    render() {
        return (React.createElement(SectionList, { renderItem: this.createTalkItem, renderSectionHeader: this.renderHeader, sections: this.dataSource, keyExtractor: (talk) => talk.id }));
        {
        }
    }
    createTalkItem(talk) {
        return (React.createElement(TouchableOpacity, { key: talk.title },
            React.createElement(Cell, null,
                React.createElement(TalkCell, { talk: talk }))));
    }
    createHeader(date) {
        return (React.createElement(DateListHeader, { date: date }));
    }
}
//# sourceMappingURL=TalkView.js.map