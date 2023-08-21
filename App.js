import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import renderer from 'react-test-renderer';

export default function App() {
  return (
    <View style={styles.container}>
     <Text testID='t1' style={styles.text1}>First Project test in gits </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
