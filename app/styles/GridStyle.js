import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default {
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
    },
    colMd6: {
        width: (width / 2) - (20 / 2),
        paddingHorizontal: 10,
    },
    colMd4: {
        width: (width / 3) - (20 / 3),
        paddingHorizontal: 10,
    },
    colMd3: {
        width: (width / 4) - (20 / 4),
        paddingHorizontal: 10,
    },
};
