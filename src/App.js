import { Provider as PaperProvider, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import EntradaDEmail from './components/CampsDEntrada/EntradaDEmail';
import EntradaDeTelefon from './components/CampsDEntrada/EntradaDTelefono';

const nom = (estil, textAMostrar) => {
  return (
    <Text style={estil} variant='displayLarge'>{textAMostrar}</Text>
  );
}

const App = () => {
  return (
    <PaperProvider>
      {nom(styles.estilDeText, 'Manel Viel')} 
      <EntradaDEmail nom="Email" indicacions="Introduce tu email" />
      <EntradaDeTelefon nom="Telèfon" indicacions="Formato: +xx xxxxxxxxx o xxxxxxxxx" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontStyle: 'italic'
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  estilDeText: { 
    color: 'blue', 
    fontSize: 25, 
    fontWeight: 'bold', 
  },
});

export default App;