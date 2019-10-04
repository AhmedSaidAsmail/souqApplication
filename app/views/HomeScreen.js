import * as React from 'react';
import {View, Text, TouchableOpacity, Animated, ScrollView, Image} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Main, WelcomeStyle} from '../styles';
import Carousel from './_layouts/Carousel';
import SearchBar from './_layouts/SearchBar';
import {images, products} from '../Mocks/Mocks';
import Colors from '../styles/Colors';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 50,
            scrollY: new Animated.Value(0),
            get scrollMarginTop() {
                return this.headerHeight;
            },
        };
    }

    _onScroll = event => {
        let {y} = event.nativeEvent.contentOffset;
        this.state.scrollY.setValue(y);
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <View style={Main.container}>
                    <SearchBar
                        headerHeight={this.state.headerHeight}
                        scrollY={this.state.scrollY}
                    />
                    <Animated.ScrollView
                        bounces={false}
                        scrollEventThrottle={16}
                        onScroll={event => this._onScroll(event)}
                    >
                        <View style={WelcomeStyle.carouselContainer}>
                            <Carousel images={images} duration={8000}/>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={WelcomeStyle.welcomeCategoryWrapper}>
                                <View style={WelcomeStyle.welcomeCategoryImageWrapper}>
                                    <Image source={require('../../assets/images/iphone.png')}
                                           style={WelcomeStyle.welcomeCategoryImage}/>
                                </View>
                                <Text style={WelcomeStyle.welcomeCategoryText}>جوالات</Text>
                            </View>
                            <View style={WelcomeStyle.welcomeCategoryWrapper}>
                                <View style={WelcomeStyle.welcomeCategoryImageWrapper}>
                                    <Image source={require('../../assets/images/electronics.png')}
                                           style={WelcomeStyle.welcomeCategoryImage}/>
                                </View>
                                <Text style={WelcomeStyle.welcomeCategoryText}>الكترونيات</Text>
                            </View>
                            <View style={WelcomeStyle.welcomeCategoryWrapper}>
                                <View style={WelcomeStyle.welcomeCategoryImageWrapper}>
                                    <Image source={require('../../assets/images/product-kitchenaid-appliances.png')}
                                           style={WelcomeStyle.welcomeCategoryImage}/>
                                </View>
                                <Text style={WelcomeStyle.welcomeCategoryText}>ادوات البيت</Text>
                            </View>
                            <View style={WelcomeStyle.welcomeCategoryWrapper}>
                                <View style={WelcomeStyle.welcomeCategoryImageWrapper}>
                                    <Image source={require('../../assets/images/iphone.png')}
                                           style={WelcomeStyle.welcomeCategoryImage}/>
                                </View>
                                <Text style={WelcomeStyle.welcomeCategoryText}>جوالات</Text>
                            </View>
                            <View style={WelcomeStyle.welcomeCategoryWrapper}>
                                <View style={WelcomeStyle.welcomeCategoryImageWrapper}>
                                    <Image source={require('../../assets/images/iphone.png')}
                                           style={WelcomeStyle.welcomeCategoryImage}/>
                                </View>
                                <Text style={WelcomeStyle.welcomeCategoryText}>جوالات</Text>
                            </View>
                        </ScrollView>
                        <View style={WelcomeStyle.headerWrapper}>
                            <View style={WelcomeStyle.headerText}>
                                <Text style={WelcomeStyle.mainHeader}>افضل العروض</Text>
                            </View>
                            <View style={WelcomeStyle.headerButtonWrapper}>
                                <TouchableOpacity style={WelcomeStyle.headerButton}>
                                    <Text style={WelcomeStyle.headerButtonText}>تسوق الان</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView horizontal style={WelcomeStyle.itemsContainer}
                                    showsHorizontalScrollIndicator={false}>
                            {
                                products.map((item, index) => {
                                    return (
                                        <View key={index} style={WelcomeStyle.itemWrapper}>
                                            <View style={WelcomeStyle.itemImageWrapper}>
                                                <View style={WelcomeStyle.itemImageHolder}>
                                                    <Image style={WelcomeStyle.itemImage}
                                                           source={item.image}/>
                                                </View>
                                                <View style={WelcomeStyle.itemFavorite}>
                                                    <MaterialIcons name="favorite-border"
                                                                   style={WelcomeStyle.itemFavoriteIcon}/>
                                                </View>
                                            </View>
                                            <View style={WelcomeStyle.itemContent}>
                                                <Text style={WelcomeStyle.itemTitle}>{item.title}</Text>
                                            </View>
                                            <View style={WelcomeStyle.itemBottom}>
                                                <View style={WelcomeStyle.itemBottomPrice}>
                                                    <Text style={WelcomeStyle.itemBottomCurrentPrice}>141.00
                                                        ر.س</Text>
                                                    {/*<View style={WelcomeStyle.itemBottomOldPrice}>*/}
                                                    {/*<Text style={WelcomeStyle.itemBottomOldPriceNumber}>141.00*/}
                                                    {/*ر.س</Text>*/}
                                                    {/*<Text style={WelcomeStyle.itemBottomDiscountPercentage}>7%*/}
                                                    {/*off</Text>*/}
                                                    {/*</View>*/}
                                                </View>
                                                <View style={WelcomeStyle.itemBottomAddToCart}>
                                                    <TouchableOpacity
                                                        style={WelcomeStyle.itemBottomAddToCartButton}>
                                                        <SimpleLineIcons name='basket'
                                                                         style={WelcomeStyle.itemBottomAddToCartIcon}/>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                    );
                                })
                            }

                        </ScrollView>
                        {/* *********categories show********* */}
                        {/*<View style={WelcomeStyle.mainCategoryWelcomeBannerWrapper}>*/}
                        <View style={WelcomeStyle.mainCategoryWelcomeBanner}>
                            <View style={WelcomeStyle.minCategoryWelcomeImageWrapper}>
                                <ScalableImage height={WelcomeStyle.minCategoryWelcomeImage.height}
                                               source={require('../../assets/images/testMainCategory2.png')}/>
                            </View>
                            <Text style={WelcomeStyle.mainCategoryWelcomeEnTitle}>Cleaning Supplies</Text>
                            <Text style={WelcomeStyle.mainCategoryWelcomeArTitle}>النظافة و مستلزماتها</Text>

                        </View>
                        <View style={WelcomeStyle.categoriesWelcomeBannerWrapper}>
                            <View style={WelcomeStyle.categoryWelcomeBanner}>
                                <View style={WelcomeStyle.categoryWelcomeImageWrapper}>
                                    <Image style={WelcomeStyle.categoryWelcomeImage}
                                           source={require('../../assets/images/finish.png')}/>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeEnTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeEnTitle}>Laundry</Text>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeArTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeArTitle}>غسيل الملابس</Text>
                                </View>
                            </View>
                            <View style={WelcomeStyle.categoryWelcomeBanner}>
                                <View style={WelcomeStyle.categoryWelcomeImageWrapper}>
                                    <Image style={WelcomeStyle.categoryWelcomeImage}
                                           source={require('../../assets/images/dettol-500x500.png')}/>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeEnTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeEnTitle}>Multipurpose Cleaners</Text>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeArTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeArTitle}>منظفات متعددة</Text>
                                </View>
                            </View>
                        </View>
                        <View style={WelcomeStyle.categoriesWelcomeBannerWrapper}>
                            <View style={WelcomeStyle.categoryWelcomeBanner}>
                                <View style={WelcomeStyle.categoryWelcomeImageWrapper}>
                                    <Image style={WelcomeStyle.categoryWelcomeImage}
                                           source={require('../../assets/images/finish.png')}/>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeEnTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeEnTitle}>Laundry</Text>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeArTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeArTitle}>غسيل الملابس</Text>
                                </View>
                            </View>
                            <View style={WelcomeStyle.categoryWelcomeBanner}>
                                <View style={WelcomeStyle.categoryWelcomeImageWrapper}>
                                    <Image style={WelcomeStyle.categoryWelcomeImage}
                                           source={require('../../assets/images/dettol-500x500.png')}/>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeEnTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeEnTitle}>Multipurpose Cleaners</Text>
                                </View>
                                <View style={WelcomeStyle.categoryWelcomeArTitleWrapper}>
                                    <Text style={WelcomeStyle.categoryWelcomeArTitle}>منظفات متعددة</Text>
                                </View>
                            </View>
                        </View>
                        {/*</View>*/}
                    </Animated.ScrollView>
                </View>
            </React.Fragment>
        );
    }
}