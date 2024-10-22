import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Image,
} from 'react-native';

export default function Screen3({ route, navigation }) {
  const {product}= route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productImg}>
        <Image source={product.image} style={styles.img} />
      </View>

      <View style={styles.detail}>
        <Text style={styles.text1}>Pina Mountain</Text>
        <View style={styles.priceInfo}>
          <Text style={styles.text2}>15% OFF I 350$</Text>
          <Text style={styles.text3}>449$</Text>
        </View>
        <Text style={styles.text4}>Description</Text>
        <Text style={styles.text5}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>

      <View style={styles.press}>
        <Image source={require('../assets/heartBo.png')} />
        <View style={styles.containButton}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Screen1')}> <Text style={styles.text6}>Add to cart</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8,
  },
  productImg: {
    flex: 3,
    backgroundColor: '#E941411A',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  img: {
    padding: 5,
    flex: 1,
    width: '50%',
    resizeMode: 'contain',
    height: null,
  },
  detail: {
    flex: 5,
    paddingHorizontal: 5,
  },
  text1: {
    fontSize: 35,
    fontWeight: 400,
  },
  priceInfo: {
    flexDirection: 'row',
  },
  text2: {
    fontSize: 25,
    fontWeight: 400,
    color: '#00000096',
  },
  text3: {
    fontSize: 25,
    fontWeight: 400,
    marginHorizontal: 30,
    textDecorationLine: 'line-through',
  },
  text4: {
    fontSize: 25,
    fontWeight: 400,
    paddingVertical: 10,
  },

  text5: {
    fontSize: 20,
    fontWeight: 400,
    paddingVertical: 10,
    color: '#00000096',
  },

  press: {
    flex: 1,
    flexDirection: 'row',
  },
  containButton: {
    flex:1,
    alignItems:'center'
  },
  button: {
    backgroundColor: '#E94141',
    borderRadius: 30,
    width:"80%",
    resizeMode: 'contain',
    height: 35,
    alignItems:'center',
    justifyContent:'center',
  },
  text6: {
    fontSize: 20,
    fontWeight: 400,
    paddingVertical: 10,
    color: 'white',
  },
});
