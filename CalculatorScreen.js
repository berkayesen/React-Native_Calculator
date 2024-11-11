import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import useCalculatorViewModel from './CalculatorViewModel';
import styles from './styles';

const App = ({ navigation }) => {
  const { display, result, handlePress } = useCalculatorViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HistoryDisplay}>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.historyButton}>
        <Text style={styles.historybuttonText}>🕓History</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.delButton}>
        <TouchableOpacity onPress={() => handlePress('C')} style={styles.delButton}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
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

export default App;
