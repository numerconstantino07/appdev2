import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import your screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Change the screen here when testing */}
      <WelcomeScreen />
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      {/* <TodoScreen /> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});