import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Digite seu nome"
        onChange={texto => guardarNombre(texto)}
        value={nombre}
        style={styles.input}
      />

      <TextInput
        label="Teléfono"
        placeholder="Seu teléfono"
        onChange={texto => guardarTelefono(texto)}
        value={telefono}
        style={styles.input}
      />

      <TextInput
        label="Correo"
        placeholder="Seu correo"
        onChange={texto => guardarCorreo(texto)}
        value={correo}
        style={styles.input}
      />

      <TextInput
        label="Empresa"
        placeholder="Nome da empresa"
        onChange={texto => guardarEmpresa(texto)}
        value={empresa}
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
