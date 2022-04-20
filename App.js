import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {

  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBG = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setRandomColor(color);
  };

  const resetBG = () => {
    setRandomColor(`rgb(0, 0, 0)`);
  };

  return(
    <>
      <StatusBar backgroundColor={randomColor}/>
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={[styles.text, {marginTop: 12}]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 24,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  }
});

export default App;