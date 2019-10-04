import {StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import {searchBarHeight} from '../../app.json';

const {width, height} = Dimensions.get('window');
const searchInput = {
    height: searchBarHeight,
    paddingBottom: 10,
    get inputHeight() {
        return this.height - this.paddingBottom;
    },
};
export default {
    header: {
        backgroundColor: Colors.gold,
        paddingBottom: 10,
        zIndex: 1000,
        elevation: 1000,
        position: 'relative',
    },
    logoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        flex: 1,
    },
    headerLogo: {
        flex: 1,
        resizeMode: 'contain',
    },
    headerBackButton: {
        position: 'absolute',
        left: 20,
    },
    container: {
        flex: 1,
    },
    body: {
        flex: 10,
        backgroundColor: Colors.silver,
    },
    footer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: Colors.aspestos,
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
    },
    footerPart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerIcon: {
        fontSize: 20,
    },
    footerIconActive: {
        color: Colors.pumpkin,
    },
    footerText: {
        fontFamily: Fonts.elMessiriBold,
        fontSize: 12,
        textAlign: 'center',
    },
    searchInputWrapper: {
        ...StyleSheet.absoluteFillObject,
        height: searchInput.height,
        zIndex: 999,
        elevation: 999,
        paddingBottom: searchInput.paddingBottom,
        backgroundColor: Colors.gold,
        flexDirection: 'row',
    },
    searchInputContainer: {
        backgroundColor: Colors.grey,
        marginRight: 10,
        borderTopRightRadius: searchInput.inputHeight / 2,
        borderBottomRightRadius: searchInput.inputHeight / 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        flex: 3,
    },
    searchIconWrapper: {
        flex: 1,
        borderTopRightRadius: searchInput.inputHeight / 2,
        borderBottomRightRadius: searchInput.inputHeight / 2,
        backgroundColor: Colors.alizarin,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    searchIcon: {
        fontSize: 22,
        marginRight: 10,
        color: '#ffffff',
    },
    searchInput: {
        flex: 4,
        paddingHorizontal: 10,
        textAlign: 'right',
        justifyContent: 'center',
        fontSize: 17,
        fontFamily: Fonts.elMessiriSemiBold,
    },
    searchBarNotificationsWrapper: {
        flex: 1,
        backgroundColor: Colors.alizarin,
        borderTopLeftRadius: searchInput.inputHeight / 2,
        borderBottomLeftRadius: searchInput.inputHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    searchBarNotificationText: {
        fontFamily: Fonts.elMessiriSemiBold,
        color: '#ffffff',
        fontSize: 17,
        marginLeft: 5,
    },
    resultArea: {
        position: 'absolute',
        width,
        height,
        backgroundColor: '#ffffff',
        zIndex: 1,
        elevation: 1,
        paddingTop: 20,
    },
    mainScroll: {},
}