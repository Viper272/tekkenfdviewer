import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native-web';



function MoveComponent({tMove, xPos, yPos}) {
    return (
        <View style={styles.background}>
            <Text>Move: {tMove.Name}</Text>
            <Text>Hits: {tMove.HitCount}</Text>
            <Text>Location: {tMove.HitLocation}</Text>
        </View>
    );
}

let styles = StyleSheet.create({
    background: {
        backgroundColor : '#CCCCCC',
        outlineColor: '#FFFFFF',
        outlineStyle: 'solid',
        outlineWidth: 4,
        width           : 150,
        height          : 100,
    },
});

export default MoveComponent;