import './App.css';

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
      <View style={{flex: 1, width: '100%', backgroundColor: 'gray'}}>
        <ReactNativeZoomableView  
          ref={zoomableViewRef}
        
          contentHeight={height * 2}
          contentWidth={width * 2}

          maxZoom={2}
          minZoom={0.5}

          initialZoom={1}

          style={{backgroundColor: 'green'}}
        >
          <MoveComponent
            tMove={new TekkenMove("Memai Tsuki", 1, "High")}
            xPos={100}
            //yPos={100}
          />
          <MoveComponent
            tMove={new TekkenMove("Memai Tsuki 2", 2, "Middle")}
          />
        </ReactNativeZoomableView>
      </View>
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
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }
})

export default App;