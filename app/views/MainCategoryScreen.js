import * as React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import Header from './_layouts/Header';
import {MainCategoriesStyle as style} from '../styles';
import {categories} from '../Mocks/CategoriesMock';
import Icon from 'react-native-vector-icons/FontAwesome';
import index from '../middleware/redux/index';

export default class MainCategoryScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: <Header {...navigation} back={false}/>
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            scrollY: 0,
            scrollTopOffset: 0,
            viewMeasureY: 0,
            viewMeasureHeight: 0,
        };
    }

    _activeTab = (index) => {
        return index === this.state.index ? {
            button: style.navigationTabActive,
            text: style.navigationTabActiveText,
        } : {
            button: style.navigationTabInActive,
            text: style.navigationTabInActiveText,
        };
    }
    _onPress = (index) => {
        this.setState({index});
    }
    _categoryTab = (item, index) => {
        return (
            <TouchableOpacity style={{...style.navigationTab, ...this._activeTab(index).button}}
                              onPress={this._onPress.bind(this, index)}>
                <Text style={this._activeTab(index).text}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    _onScroll = (event) => {
        // this.setState({scrollY: event.nativeEvent.contentOffset.y});
        // this.viewRef.measure((x, y, width, height, px, py) => this.setState({
        //     viewMeasureY: py,
        //     viewMeasureHeight: height
        // }));
        // this.testRef.measure((x, y, width, height, px, py) => this.setState({scrollTopOffset: py}));
    }

    componentDidUpdate() {


    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.categoryContainer}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        stickyHeaderIndices={[1, 3]}
                    >
                        <View style={style.categoryBannerWrapper}>
                            <Image source={require('../../assets/images/slides/image_4.jpg')}
                                   style={style.categoryBanner}/>
                        </View>
                        <View style={style.subCategoryTitleContainerWrapper}>
                            <View style={style.subCategoryTitleContainer}>
                                <Text style={style.subCategoryTitle}>موبايلات ذكية</Text>
                                <Icon name="chevron-left" style={style.subCategoryTitleIcon}/>
                            </View>
                        </View>
                        <View style={style.subCategoryContainer}>
                            <View style={style.subCategoryItemsContainer}>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/iphone.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>ابل</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/58adefbfe612507e27bd3c2c.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>شاومي</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/Samsung_Galaxy_J6.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>سامسونج</Text>
                                </View>
                            </View>
                            <View style={style.subCategoryItemsContainer}>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/58adefbfe612507e27bd3c2c.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>شاومي</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/Samsung_Galaxy_J6.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>سامسونج</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.subCategoryTitleContainerWrapper}>
                            <View style={style.subCategoryTitleContainer}>
                                <Text style={style.subCategoryTitle}>موبايلات ذكية2</Text>
                                <Icon name="chevron-left" style={style.subCategoryTitleIcon}/>
                            </View>
                        </View>
                        <View style={style.subCategoryContainer}>
                            <View style={style.subCategoryItemsContainer}>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/iphone.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>ابل</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/58adefbfe612507e27bd3c2c.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>شاومي</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/Samsung_Galaxy_J6.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>سامسونج</Text>
                                </View>
                            </View>
                            <View style={style.subCategoryItemsContainer}>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/58adefbfe612507e27bd3c2c.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>شاومي</Text>
                                </View>
                                <View style={style.subCategoryItem}>
                                    <View style={style.subCategoryItemImageWrapper}>
                                        <Image source={require('../../assets/images/Samsung_Galaxy_J6.png')}
                                               style={style.subCategoryItemImage}/>
                                    </View>
                                    <Text style={style.subCategoryItemText}>سامسونج</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height: 700}}/>
                    </ScrollView>
                </View>
                <View style={style.categoryNavigation}>
                    <FlatList
                        data={categories}
                        renderItem={
                            ({item, index}) => this._categoryTab(item, index)
                        }
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state.index}
                    />
                </View>
            </View>
        );
    }
}