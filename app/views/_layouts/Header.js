import * as React from 'react';
import {View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {headerHeight} from '../../../app.json';
import {Main, Colors} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (navigation) => {
    const {routeName} = navigation.state;
    const {goBack} = navigation;
    return (
        <View style={{...Main.header, height: 50}}>
            <StatusBar backgroundColor={Colors.gold}/>
            <View style={{...Main.logoWrapper}}>
                {routeName !== "Home" && navigation.back && (
                    <TouchableOpacity
                        style={Main.headerBackButton}
                        onPress={(navigation) => goBack()}>
                        <Icon name="arrow-left" size={22}/>
                    </TouchableOpacity>
                )}
                <Image
                    source={require('../../../assets/images/logo2.png')}
                    style={Main.headerLogo}
                />
            </View>
        </View>
    );
}
