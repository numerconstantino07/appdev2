import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldDemo from './HelloWorldDemo';
import ProfileDemo from './ProfileDemo';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! ghfhrthnrggfd</Text>
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
