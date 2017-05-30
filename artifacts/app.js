import React from 'react';
// import LoginPresenter from './screens/LoginPresenter'
import TalksCalendarPresenter from './screens/TalksCalendarPresenter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);
export class App extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(TalksCalendarPresenter, null)));
    }
}
//# sourceMappingURL=app.js.map