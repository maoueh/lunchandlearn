import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Colors from '../../constants/style/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 100,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.TRANSPARENT
    }
});
export default class Loader extends React.Component {
    render() {
        const pointerEvent = this.props.display ? 'box-only' : 'none';
        return (React.createElement(View, { style: styles.container, pointerEvents: pointerEvent }, this.props.display ? React.createElement(ActivityIndicator, { color: Colors.GREEN }) : undefined));
    }
}
//# sourceMappingURL=Loader.js.map