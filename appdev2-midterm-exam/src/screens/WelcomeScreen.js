import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* 1. Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Let's Get Started!</Text>
      </View>

      {/* 2. Middle Section */}
      <View style={styles.middleSection}>
        <Image
          source={require("./../../assets/welcome.png")}
          style={styles.image}
        />
      </View>

      {/* 3. Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D7AFF",
    paddingTop: 80,
    paddingHorizontal: 30,
  },

  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  middleSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },

  bottomSection: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    minHeight: 120, // ensures buttons are visible on small screens
  },

  button: {
    backgroundColor: "#FFCC00",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },

  loginContainer: {
    flexDirection: "row",
  },

  footerText: {
    color: "white",
  },

  loginLink: {
    color: "#FFCC00",
    fontWeight: "bold",
    fontSize: 15,
  },
});