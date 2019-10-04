import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import BottomNavigator from './BottomNavigator';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../middleware/redux';


const Container = createAppContainer(BottomNavigator);

export default class Navigator extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
                <Container/>
            </Provider>
        );
    }
}
