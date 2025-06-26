import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  //to keep track if the user is authenticated or not
  const [isSignup, setIsSignup] = useState<boolean>(true);

  //to toggle between signup and signin
  const toggleAuthMode = () => {
    setIsSignup((prevMode) => !prevMode);
  };
  return (
    <KeyboardAvoidingView
      //building the app for ios and android so the content does not go under the keyboard
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.pageContainer}
    >
      <View style={styles.content}>
        //creating our auth scren using react native paper components
        <Text style={styles.title} variant="headlineMedium">
            {" "}
          {isSignup ? "Create Account" : "Welcome Back"}
        </Text>
        <TextInput
          style={styles.input}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="yourname@gmail.com"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label="Password"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="********"
          mode="outlined"
        />
        <Button mode="contained" style={styles.button}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>
        <Button mode="text" onPress={toggleAuthMode} style={styles.switch}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Dont't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "bold",
    // marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {},
  switch: {
    marginTop: 16,
  },
});
