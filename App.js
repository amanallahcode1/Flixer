import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.tinyLogo}
        source={require('./assets/flixer_logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 50
  
  },
  tinyLogo: {
    width: 150,
    height: 50,
    
  }
});

// Netflix Inspired Color Themes: #db0000, #000000
