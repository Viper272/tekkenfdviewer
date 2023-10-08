import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native-web';

function MoveAttack() {
    return (
        <View style={styles.square}>
            <Text>Some Test Data</Text>
        </View>
    );
}

let styles = StyleSheet.create({
    square: {
        backgroundColor : '#CCCCCC',
        width           : 100,
        height          : 100,
    },
});

export default MoveAttack;