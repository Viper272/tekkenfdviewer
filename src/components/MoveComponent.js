import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native-web';



function MoveComponent({tMove, xPos, yPos}) {
    //let tMove = new TekkenMove("Memai Tsuki", 1, "High");

    return (
        <View style={{position: 'absolute', left: xPos, top: yPos}}>
            <View style={styles.background}>
                <Text>Move: {tMove.Name}</Text>
                <Text>Hits: {tMove.HitCount}</Text>
                <Text>Location: {tMove.HitLocation}</Text>
            </View>
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