import React from 'react';
import {Button} from 'react-native-paper';

const Barra = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return (
    <Button
      icon="add-circle-outline"
      uppercase="true"
      textColor="#FFF"
      onPress={() => handlePress()}>
      Cliente
    </Button>
  );
};

export default Barra;
