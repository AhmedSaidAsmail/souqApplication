import * as React from 'react';
import Header from '../views/_layouts/Header';
import {createStackNavigator} from 'react-navigation-stack';
import {
    HomeScreen,
    CategoryScreen,
    ItemScreen,
} from '../views';

export default createStackNavigator({
    Home: HomeScreen,
    Category: CategoryScreen,
    Item: ItemScreen,
}, {
    initialRouteName: 'Home',
    mode: 'modal',
    defaultNavigationOptions: ({navigation}) => {
        return {
            header: <Header {...navigation} back={true}/>,
            gesturesEnabled: true,
        }
    },
});