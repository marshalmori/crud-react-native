import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const leerNombre = () => {
    console.log('Escrevendo...');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Digite seu nome"
        onChange={() => leerNombre()}
        style={styles.input}
      />

      <TextInput
        label="Teléfono"
        placeholder="Seu teléfono"
        onChange={() => leerNombre()}
        style={styles.input}
      />

      <TextInput
        label="Correo"
        placeholder="Seu correo"
        onChange={() => leerNombre()}
        style={styles.input}
      />

      <TextInput
        label="Empresa"
        placeholder="Nome da empresa"
        onChange={() => leerNombre()}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
