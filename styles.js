import { StyleSheet } from 'react-native';

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
  delButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  }
});

export default styles;
