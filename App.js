import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [conteo, setConteo] = useState(0);

  return (
    <View style={styles.maincontainer}>
      <Text style={{width: '80%', textAlign: 'left'}}>Conteo:</Text>
      <Text style={styles.conteo}>
        {conteo}
      </Text>
      <View style={styles.controlsContainer}>
        <Button title='Contar' 
                style={styles.boton}
                onPress={() => {
                  setConteo(conteo + 1)
                }}/>               
        <Button title='Reiniciar' 
                style={styles.boton}
                onPress={() => {
                  setConteo(0)
                }}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsContainer: {
    flex: 0,
    padding: 20,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  conteo: {
    margin: 16,
    width: '80%',
    padding: 16,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1
  },
  boton: {
    width:240,
    margin: 16
  }
});
