import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Image,
  FlatList,
} from 'react-native';

export default function Screen2({ navigation }) {
  // Dữ liệu mẫu cho danh sách sản phẩm
  const products = [
    {
      id: '1',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeXanh.png'),
      favorite: require('../assets/heart.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
    {
      id: '2',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeDoDen.png'),
      favorite: require('../assets/heartBo.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
    {
      id: '3',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeTim.png'),
      favorite: require('../assets/heart.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
    {
      id: '4',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeDo.png'),
      favorite: require('../assets/heartBo.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
    {
      id: '5',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeTim.png'),
      favorite: require('../assets/heartBo.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
    {
      id: '6',
      name: 'Pinarello',
      price: 1500,
      image: require('../assets/xeDoDen.png'),
      favorite: require('../assets/heartBo.png'),
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    },
  ];

  // Hàm render từng item (sản phẩm) trong FlatList
  const renderProduct = ({ item }) => (
    <Pressable style={styles.each} onPress={() => navigation.navigate('Screen3', { product: item })}>
      <View style={styles.each1}>
        <Image style={styles.heart} source={item.favorite} />
        <Image style={styles.productImg} source={item.image} />
      </View>
      <View style={styles.each2}>
        <Text style={styles.text4}>{item.name}</Text>
        <View style={styles.price}>
          <Text style={styles.text5}>$</Text>
          <Text style={styles.text6}>{item.price}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>The world’s Best Bike</Text>

      <View style={styles.menu}>
        <Pressable style={styles.button}>
          <Text style={styles.text2}>All</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text3}>Roadbike</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text3}>Mountain</Text>
        </Pressable>
      </View>

      {/* Sử dụng FlatList để hiển thị sản phẩm */}
      <FlatList
        data={products} // Truyền dữ liệu vào FlatList
        renderItem={renderProduct} // Hàm render từng item
        keyExtractor={(item) => item.id} // Khóa duy nhất cho từng item
        numColumns={2} // Hiển thị 2 sản phẩm trên một hàng
        columnWrapperStyle={styles.row} // Căn chỉnh cho từng hàng
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8,
  },
  text1: {
    color: '#E94141',
    fontSize: 25,
    fontWeight: 700,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 100,
    height: 32,
    borderWidth: 1,
    borderColor: '#E9414187',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: '#E94141',
    fontSize: 16,
    fontWeight: 400,
  },
  text3: {
    color: '#BEB6B6',
    fontSize: 16,
    fontWeight: 400,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  each: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    padding: 5,
  },
  each1: {
    flexDirection: 'row',
  },
  productImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    height: 127,
  },
  each2: {
    marginTop: 10,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text4: {
    color: '#00000099',
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'center',
  },
  text5: {
    color: '#F7BA83',
    fontSize: 16,
    fontWeight: 400,
  },
  text6: {
    fontSize: 16,
    fontWeight: 400,
  },
});
