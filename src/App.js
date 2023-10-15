import React, { createRef } from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native-web';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';//src/ReactNativeZoomableView';

import MoveComponent from './components/MoveComponent';
let zoomableViewRef;

class TekkenMove {
    
  Name;
  HitCount;
  HitLocation;

  constructor(Name, HitCount, HitLocation) {
      this.Name = Name;
      this.HitCount = HitCount;
      this.HitLocation = HitLocation;
  }
}



function App() {
  zoomableViewRef = createRef();

  const {height, width} = useWindowDimensions();


  return (
    <View style={styles.container} onWheel={(e) => {setScroll(e)}}>
        <ReactNativeZoomableView  
          ref={zoomableViewRef}
        
          contentHeight={height}
          contentWidth={width}

          maxZoom={2}
          minZoom={0.5}

          initialZoom={1}

          style={[styles.moveView, {backgroundColor:'darkgray'}]}
        >
          <View style={[styles.moveViewColumn, {backgroundColor:'darkred'}]}>  
            <MoveComponent tMove={new TekkenMove("Memai Tsuki", 1, "High")}/>
          </View>
          <View style={[styles.moveViewColumn, {backgroundColor:'green'}]}>  
            <MoveComponent tMove={new TekkenMove("Memai Tsuki 2", 2, "Middle")}/>
            <MoveComponent tMove={new TekkenMove("One-Two Punch", 2, "High")}/>
          </View>
          <View style={[styles.moveViewColumn, {backgroundColor:'darkblue'}]}>  
            <MoveComponent tMove={new TekkenMove("Ryu Enko", 3, "Middle")}/>
            <View style={styles.moveViewBlank}/>
          </View>
        </ReactNativeZoomableView>
      </View>
  );
}

function setScroll(eventArgs) {
  console.log(eventArgs);

  if(eventArgs.deltaY < 0) {
    zoomableViewRef.current.zoomBy(0.5);
  }
  else {
    zoomableViewRef.current.zoomBy(-0.5);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh'
  },
  moveView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  moveViewColumn: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  moveViewBlank: {
    height: 100
  }
})

export default App;