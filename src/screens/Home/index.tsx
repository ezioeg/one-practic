/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductScreenRouteParams} from '../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useCallback} from 'react';
import axios from 'axios';

const API_URL = 'http://192.168.1.109:3000/products';

export type ProductScreenNavigation = NativeStackNavigationProp<
  {Product: ProductScreenRouteParams},
  'Product'
>;

function ProductItem({
  id,
  name,
  price,
  description,
  onDelete,
}: {
  id: string;
  name: string;
  price: string;
  description: string;
  onDelete: () => void;
}) {
  const navigation = useNavigation<ProductScreenNavigation>();

  const handleDelete = async (productID: string) => {
    await deleteProduct(productID);
  };

  const deleteProduct = async (productID: string) => {
    try {
      await axios.delete(`${API_URL}/${productID}`);
      onDelete();
    } catch (e) {
      Alert.alert('Error', 'No se pudo eliminar');
    }
  };

  return (
    <View
      style={{
        // height: '5%',
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 5,
        marginHorizontal: 10,
      }}>
      <TouchableOpacity
        key={id}
        style={{backgroundColor: 'red', width: '30%'}}
        onPress={() =>
          navigation.navigate('Product', {
            id: id,
            name: name,
            price: price,
            description: description,
          })
        }>
        <Text>IMAGEN PRODUCTO</Text>
      </TouchableOpacity>

      <View style={{backgroundColor: 'green', width: '30%'}}>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{description}</Text>
      </View>
      <View style={{backgroundColor: 'green', width: '20%'}}>
        <Button
          title="Editar"
          onPress={() =>
            navigation.navigate('Product', {
              id: id,
              name: name,
              price: price,
              description: description,
            })
          }
        />
      </View>
      <View style={{backgroundColor: 'green', width: '20%'}}>
        <Button title="Eliminar" onPress={() => handleDelete(id)} />
      </View>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation<ProductScreenNavigation>();
  const [products, setProducts] = useState<
    {id: string; name: string; price: string; description: string}[]
  >([]);
  const [loading, setLoading] = useState<'pending' | 'success' | 'error'>(
    'pending',
  );
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading('pending');
    try {
      const res = await axios.get(API_URL);
      console.log('RESSSSS: ', res.data);
      setProducts(res.data);
      setLoading('success');
    } catch (e) {
      setError('No se pudieron obtener los productos');
      setLoading('error');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, []),
  );

  if (loading === 'pending') {
    return <ActivityIndicator style={styles.center} size="large" />;
  }
  if (loading === 'error') {
    return <Text style={styles.center}>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>

      <Button
        title="Agregar producto"
        onPress={() =>
          navigation.navigate('Product', {
            // Sin pasar props = modo creación
          })
        }
      />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            onDelete={fetchProducts}
          />
        )}
        contentContainerStyle={{gap: 12}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
