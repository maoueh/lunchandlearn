import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import TalkCell from './TalkCell';
class TalkView extends React.Component {
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
        return React.createElement(TalkCell, { talk: talk });
    }
}
export default connect()(TalkView);
//# sourceMappingURL=TalkView.js.map