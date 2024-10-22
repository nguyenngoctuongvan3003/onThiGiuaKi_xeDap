import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Image,
} from 'react-native';


export default function Screen1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.no1screen1}>
        <Text style={styles.text1}>
          A premium online store for sporter and their stylish choice
        </Text>

        <View style={styles.banner}>
          <Image
            style={styles.bannerImg}
            source={require('../assets/banner.png')}
          />
        </View>

        <Text style={styles.text2}>POWER BIKE {'\n'} SHOP</Text>
      </View>

      <View style={styles.no2screen1}>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Screen2')}>
          <Text style={styles.text3}>Get Started</Text>
        </Pressable>
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
  no1screen1: {
    flex: 9,
  },
  no2screen1: {
    flex: 1,
  },
  text1: {
    marginTop: 50,
    fontFamily: 'VT323',
    fontWeight: 400,
    fontSize: 26,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  banner: {
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#E941411A',
    padding:30,

  },
  bannerImg: {
    paddingHorizontal: 10,
    width: null,
    resizeMode: 'contain',
    height: 270,
  },
  text2: {
    fontFamily: 'Ubuntu',
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 29.87,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E94141',
    borderRadius: 30,
    width: null,
    resizeMode: 'contain',
    height: 31,
  },
  text3: {
    color: 'white',
    fontFamily: 'VT323',
    fontWeight: 400,
    fontSize: 27,
    textAlign: 'center',
  },
});
