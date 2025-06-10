import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //simplest way to debug our application during development
  console.log('App executed!');

  //Chrome debugging
  let x;
  x.toString();
  
  return (
    <View style={styles.container}>
      <Text>Hello Wanda Guela!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
