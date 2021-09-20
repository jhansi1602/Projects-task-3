import React, { useState } from 'react';
import ProgressCircle from 'react-native-progress-circle';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View style={styles.container}>
       
        <View style={styles.CircleShapeView}>
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            
            
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        </View>
        </View>
 
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
    borderColor: 'black',
  borderWidth: 10
  },

});
export default App;

