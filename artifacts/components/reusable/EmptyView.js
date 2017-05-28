import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar } from './';
const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%'
    }
});
export default class EmptyView extends React.Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(NavigationBar, { name: 'Lunch and Learn' }),
            React.createElement(View, { style: styles.view },
                React.createElement(Text, null, this.props.text))));
    }
}
//# sourceMappingURL=EmptyView.js.map