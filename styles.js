import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  HistoryDisplay: {
    justifyContent: 'flex-end',
    padding: 2,
    backgroundColor: '#333',
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
  delButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  history: {
    flex: 3,
    marginVertical: 10,
  },
  historyText: {
    fontSize: 25,
    color: '#555',
    margin: 5,

  },
  clearButton: {
    backgroundColor: '#ff5555',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },historyButton: {
    padding: 1,
    backgroundColor: 'transparent',
    borderRadius: 5, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  historybuttonText: {
    fontSize: 30,
    color:'white'
  },
});

export default styles;
