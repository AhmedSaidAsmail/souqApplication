import * as React from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            selectedIndex: 0,
        };

    }

    componentDidMount() {
        setInterval(() => {
            this.setState(
                (state) => (
                    {selectedIndex: state.selectedIndex === this.state.images.length - 1 ? 0 : state.selectedIndex + 1}
                ),
                () => {
                    this.scrollRef.scrollTo({
                        animated: true,
                        x: width * this.state.selectedIndex,
                        y: 0,
                    })
                }
            );

        }, this.state.duration);
    }

    _setSelectedIndex = (event) => {
        let {width} = event.nativeEvent.layoutMeasurement;
        let {x} = event.nativeEvent.contentOffset;
        let selectedIndex = Math.floor(x / width);
        this.setState({selectedIndex});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <ScrollView
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        onMomentumScrollEnd={event => this._setSelectedIndex(event)}
                        pagingEnabled={true}
                        ref={(ref) => {
                            this.scrollRef = ref;
                        }}

                    >
                        {this.state.images.map((image, index) => (
                            <View key={index} style={styles.imageWrapper}>
                                <Image key={index} source={image.url} style={styles.image}/>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <LinearGradient colors={['#bdc3c7', '#ffffff']} style={styles.circleWrapper}>
                    {
                        this.state.images.map((image, index) => (
                            <View key={index} style={{
                                ...styles.circle,
                                backgroundColor: this.state.selectedIndex === index ? Colors.turbo : Colors.shadowSteel
                            }}/>
                        ))
                    }
                </LinearGradient>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    imageWrapper: {
        overflow: 'hidden',
        width,
        justifyContent: 'flex-start',
    },
    image: {
        resizeMode: 'cover',
        width,
        height: '100%',
    },
    circleWrapper: {
        ...StyleSheet.absoluteFillObject,
        top: null,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 7,
    },
    circle: {
        width: 25,
        height: 3,
        marginHorizontal: 5,
    },
});
