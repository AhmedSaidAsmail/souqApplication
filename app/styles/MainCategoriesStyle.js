import Colors from './Colors';
import Fonts from './Fonts';

export default {
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    categoryNavigation: {
        flex: 1,
        backgroundColor: Colors.navigationGrey,
    },
    categoryContainer: {
        flex: 3,
        padding: 10,
    },
    navigationTab: {
        paddingVertical: 13,
        paddingHorizontal: 7,

    },
    navigationTabActive: {

        backgroundColor: '#ffffff',
        borderRightColor: Colors.gold,
        borderRightWidth: 4,
        borderLeftColor: '#ffffff',
        borderLeftWidth: 1,
        borderTopColor: '#ffffff',
        borderTopWidth: 1,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
    },
    navigationTabInActive: {
        backgroundColor: Colors.navigationGrey,
        borderRightColor: Colors.navigationGrey,
        borderRightWidth: 4,
        borderLeftColor: Colors.lightGrey,
        borderLeftWidth: 1,
        borderTopColor: Colors.lightGrey,
        borderTopWidth: 1,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
    },
    navigationTabText: {},
    navigationTabActiveText: {
        textAlign: 'center',
        fontFamily: Fonts.elMessiriBold,
        fontSize: 13,
    },
    navigationTabInActiveText: {
        textAlign: 'center',
        fontFamily: Fonts.elMessiri,
        fontSize: 14,
    },
    categoryBannerWrapper: {
        height: 110,
        overflow: 'hidden',
    },
    categoryBanner: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    subCategoryTitleContainerWrapper: {
        paddingTop: 15,
        backgroundColor: '#ffffff',
    },
    subCategoryTitleContainer: {
        backgroundColor: Colors.navigationGrey,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        padding: 10,
        position: 'relative',
    },
    subCategoryTitle: {
        fontFamily: Fonts.elMessiriSemiBold,
    },
    subCategoryTitleIcon: {
        position: 'absolute',
        top: 15,
        left: 10,
    },
    subCategoryContainer: {
        backgroundColor: Colors.navigationGrey,
        borderLeftColor: Colors.lightGrey,
        borderLeftWidth: 1,
        borderRightColor: Colors.lightGrey,
        borderRightWidth: 1,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    subCategoryItemsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 5,
        justifyContent: 'flex-end',
    },
    subCategoryItem: {
        // height: 80,
        width: '33.3%',
        paddingHorizontal: 5,
    },
    subCategoryItemImageWrapper: {
        height: 80,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    subCategoryItemImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    subCategoryItemText: {
        marginTop: 5,
        fontFamily: Fonts.elMessiriMedium,
        textAlign: 'center',
    },

};