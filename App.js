import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const SalarioApp = () => {
  const [nombre, setNombre] = useState('');
  const [salarioBase, setSalarioBase] = useState('');
  const [salarioNeto, setSalarioNeto] = useState(0);
  const [descuentoISSS, setDescuentoISSS] = useState(0);
  const [descuentoAFP, setDescuentoAFP] = useState(0);
  const [descuentoRenta, setDescuentoRenta] = useState(0);

  const calcularSalarioNeto = () => {
    const salarioBaseFloat = parseFloat(salarioBase);
    const descuentoISSS = salarioBaseFloat * 0.03;
    const descuentoAFP = salarioBaseFloat * 0.04;
    const descuentoRenta = salarioBaseFloat * 0.05;

    const salarioNetoCalculado = salarioBaseFloat - descuentoISSS - descuentoAFP - descuentoRenta;

    setSalarioNeto(salarioNetoCalculado.toFixed(2));
    setDescuentoISSS(descuentoISSS.toFixed(2));
    setDescuentoAFP(descuentoAFP.toFixed(2));
    setDescuentoRenta(descuentoRenta.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />

      <Text>Salario Base:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su salario base"
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={text => setSalarioBase(text)}
      />

      <Button title="Calcular Salario Neto" onPress={calcularSalarioNeto} />

      <Text style={styles.resultado}>Salario Neto: ${salarioNeto}</Text>
      <Text style={styles.resultado}>Descuento ISSS: ${descuentoISSS}</Text>
      <Text style={styles.resultado}>Descuento AFP: ${descuentoAFP}</Text>
      <Text style={styles.resultado}>Descuento Renta: ${descuentoRenta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default SalarioApp;