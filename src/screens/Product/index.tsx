import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import {useState} from 'react';
import axios from 'axios';

const API_URL = 'http://192.168.1.109:3000/products';
type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

function ProductScreen() {
  const route = useRoute<ProductScreenRouteProp>();
  const navigation = useNavigation();

  const {
    id,
    name: routeName = '',
    price: routePrice = '',
    description: routeDesc = '',
  } = route.params || {};

  const [name, setName] = useState(routeName);
  const [price, setPrice] = useState(routePrice);
  const [description, setDescription] = useState(routeDesc);

  const isEditing = Boolean(id);

  const handleSubmit = async () => {
    if (isEditing) {
      await updateProduct(id!, name, price, description);
    } else {
      await createProduct(name, price, description);
    }
    navigation.goBack();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updateProduct = async (
    productID: string,
    productName: string,
    productPrice: string,
    productDescription: string,
  ) => {
    try {
      await axios.put(`${API_URL}/${productID}`, {
        name: productName,
        price: Number(productPrice),
        description: productDescription,
      });
    } catch (e) {
      Alert.alert('Error', 'No se pudo actualizar');
    }
  };

  const createProduct = async (
    productName: string,
    productPrice: string,
    productDescription: string,
  ) => {
    try {
      await axios.post(API_URL, {
        name: productName,
        price: Number(productPrice),
        description: productDescription,
      });
    } catch (e) {
      Alert.alert('Error', 'No se pudo crear el producto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isEditing ? 'Editar producto' : 'Crear producto'}
      </Text>

      <TextInput
        placeholder="Nombre del producto"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Precio del producto"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button
        title={isEditing ? 'Actualizar' : 'Crear'}
        onPress={handleSubmit}
      />
      <Button title={'Atras'} onPress={handleGoBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 10,
    borderRadius: 6,
  },
});

export default ProductScreen;
