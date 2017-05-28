import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as TalkAPI from './../api/talk';
import TalkView from './../components/talks/TalkView';
import { NavigationBar, EmptyView, Loader } from '../components/reusable';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
export class TalksCalendarPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Lunch and Learn';
        this.state = {
            isLoading: true,
            isEmpty: false,
            talks: new Array()
        };
    }
    componentWillMount() {
        TalkAPI.fetchTalks()
            .then(response => this.setState({
            isEmpty: response.length !== 0,
            isLoading: false,
            talks: response
        }));
    }
    renderContent() {
        if (this.state.isLoading)
            return undefined;
        return this.state.talks.length === 0 ?
            React.createElement(EmptyView, { text: 'Sorry, there are no upcoming talks' })
            :
                React.createElement(TalkView, { talks: this.state.talks });
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NavigationBar, { name: this.title }),
            React.createElement(Loader, { display: this.state.isLoading }),
            this.renderContent()));
    }
}
//# sourceMappingURL=TalksCalendarPresenter.js.map