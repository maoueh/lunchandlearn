import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTalks } from '../actions';
import TalkView from '../components/talks/TalkView';
import { NavigationBar, EmptyView, Loader } from '../components/reusable';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
class TalksCalendarPresenter extends React.Component {
    constructor() {
        super(...arguments);
        this.title = 'Lunch and Learn';
    }
    componentWillMount() {
        // this.props = {
        //   actions: {
        //     fetchTalks: fetchTalks
        //   },
        //   isLoading: false,
        //   isEmpty: false,
        //   talks: []
        // }
        this.props.actions.fetchTalks();
    }
    renderContent() {
        if (this.props.isLoading)
            return undefined;
        return this.props.talks.length === 0
            ? React.createElement(EmptyView, { text: 'Sorry, there are no upcoming talks' })
            : React.createElement(TalkView, { talks: this.props.talks });
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NavigationBar, { name: this.title }),
            React.createElement(Loader, { display: this.props.isLoading }),
            this.renderContent()));
    }
}
const mapStateToProps = (state) => ({
    talks: state.talks.data,
    isEmpty: state.talks.length === 0,
    isLoading: state.talks.isLoading
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(fetchTalks, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TalksCalendarPresenter);
//# sourceMappingURL=TalksCalendarPresenter.js.map