import React from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import TalkCell from './TalkCell';
import Cell from './Cell';
export default class TalkView extends React.Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.talks);
    }
    render() {
        return (React.createElement(ListView, { dataSource: this.dataSource, renderRow: (talk) => this.createTalkList(talk) }));
    }
    createTalkList(talk) {
        return (React.createElement(TouchableOpacity, { key: talk.title },
            React.createElement(Cell, null,
                React.createElement(TalkCell, { talk: talk }))));
    }
}
//# sourceMappingURL=TalkView.js.map