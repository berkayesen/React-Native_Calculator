import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import useCalculatorViewModel from './CalculatorViewModel';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';

const HistoryScreen = () => {
  const { loadHistory, clearHistory, history } = useCalculatorViewModel();

  useFocusEffect(
    React.useCallback(() => {
      loadHistory();
    }, [])
  );

  const handleClearHistory = () => {
    clearHistory();
  };

  return (
    <ScrollView>
      <View style={styles.historyContainer}>
        {history.length > 0 ? (
          history.map((item, index) => (
            <Text key={index} style={styles.historyText}>{item}</Text>
          ))
        ) : (
          <Text style={styles.historyText}>No history yet!</Text>
        )}
      </View>
      <TouchableOpacity style={[styles.clearButton, { display: history.length > 0 ? 'flex' : 'none'}]} onPress={handleClearHistory}>
        <Text style={styles.clearButtonText}>Clear History</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HistoryScreen;
