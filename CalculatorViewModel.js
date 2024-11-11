import { useState, useEffect } from 'react';
import { calculate } from './CalculatorModel';
import * as FileSystem from 'expo-file-system';

const HISTORY_FILE_PATH = FileSystem.documentDirectory + 'history.json';

const useCalculatorViewModel = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  // JSON dosyasından geçmiş verilerini yükle
  const loadHistory = async () => {
    try {
      const fileExists = await FileSystem.getInfoAsync(HISTORY_FILE_PATH);
      if (fileExists.exists) {
        const fileContent = await FileSystem.readAsStringAsync(HISTORY_FILE_PATH);
        const parsedHistory = JSON.parse(fileContent);
        setHistory(parsedHistory);
      } else {
        setHistory([]);
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  // Geçmiş verilerini JSON dosyasına kaydet
  const saveHistory = async (newHistory) => {
    try {
      await FileSystem.writeAsStringAsync(HISTORY_FILE_PATH, JSON.stringify(newHistory));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  // Geçmiş verilerini temizle
  const clearHistory = async () => {
    try {
      await FileSystem.writeAsStringAsync(HISTORY_FILE_PATH, JSON.stringify([]));
      setHistory([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const calculateResult = () => {
    const calculatedResult = calculate(display);
    setResult(calculatedResult);
    const newHistory = [...history, `${display} = ${calculatedResult}`];
    const cleanedHistory = newHistory.filter(item => !item.includes('undefined'));
    setHistory(cleanedHistory);
    saveHistory(cleanedHistory);

  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return {
    display,
    result,
    history,
    handlePress,
    loadHistory,
    clearHistory,
  };
};

export default useCalculatorViewModel;
