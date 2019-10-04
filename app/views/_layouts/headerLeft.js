import * as React from 'react';
import {View, Text, Button} from 'react-native';

const HeaderLeft = (props) => {
    return (
        <View>
            <Button title={"back"} onPress={() => alert("done")}/>
        </View>
    );
}
export default HeaderLeft;