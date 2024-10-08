import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(display)); // Basit bir hesaplama için eval fonksiyonu
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.delButton}>
      {['C'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.delButton}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttons}>
        {['1', '2', '3', '+'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '-'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9', '*'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['.', '0', '=', '/'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#333',
  },
  displayText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  },
  resultText: {
    color: 'lightgreen',
    fontSize: 30,
    textAlign: 'right',
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  button: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 30,
    color: '#333',
  },
  delButton:{
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  }
});

export default App;
