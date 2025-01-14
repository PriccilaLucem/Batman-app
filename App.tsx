import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from "./src/screens/Home"
import BatPassGen from "./src/screens/BatPassGen"


export default function App() {
  return (
    <View style={styles.container}>
      <BatPassGen></BatPassGen>
      <Home/>
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
