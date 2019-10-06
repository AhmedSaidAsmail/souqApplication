import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import stackNavigator from './StackNavigator';
import {Colors, Main} from '../styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
    MainCategoryScreen,
    CartScreen,
    OffersScreen,
    ProfileScreen,
} from '../views';

const bottomScreensDetails = {
    Home: {
        name: 'الرئيسية',
        icon: 'home',
        IconComponent: Octicons,
    },
    MainCategory: {
        name: 'الفئات',
        icon: 'package',
        IconComponent: Octicons,
    },
    Offers: {
        name: 'العروض',
        icon: 'ticket',
        IconComponent: Fontisto,
    },
    Profile: {
        name: 'حسابي',
        icon: 'person',
        IconComponent: Fontisto,
    },
    Cart: {
        name: 'عربة التسوق',
        icon: 'shopping-basket-add',
        IconComponent: Fontisto,
    },
};
const mainCategoryStack = createStackNavigator({MainCategoryScreen});
export default createBottomTabNavigator({

    Home: stackNavigator,
    MainCategory: mainCategoryStack,
    Offers: OffersScreen,
    Profile: ProfileScreen,
    Cart: CartScreen,
}, {
    order: Object.keys(bottomScreensDetails).reverse(),
    initialRouteName: 'MainCategory',
    tabBarOptions: {
        activeTintColor: Colors.pumpkin,
        inactiveTintColor: 'black',
    },
    defaultNavigationOptions: ({navigation}) => ({
        tabBarLabel: ({tintColor}) => {
            const {routeName} = navigation.state;
            return <Text style={{...Main.footerText, color: tintColor}}>{bottomScreensDetails[routeName].name}</Text>;
        },
        tabBarIcon: ({tintColor}) => {
            const {routeName} = navigation.state;
            let {icon, IconComponent} = bottomScreensDetails[routeName];
            return <IconComponent name={icon} size={20} color={tintColor}/>

        },

    }),
});