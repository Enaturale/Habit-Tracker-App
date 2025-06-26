import { useState} from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";

import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  //to keep track if the user is authenticated or not
  const [isSignup, setIsSignup] = useState<boolean>(true);

  //to toggle between signup and signin
  const toggleAuthMode = () => {
    setIsSignup((prevMode) => !prevMode);
  };

  //states to keep track of the input values
  const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    //state to keep track of the error messages
    const [error, setError] = useState<string | null>("");

    //them for error messages
    const theme = useTheme();

  //to handle the authentication logic, you can add your API calls here
  const handleAuth = async () => {
    //check if the email and password fields are filled
    if(!email || !password){
        setError("Please fill in all fields!");
        return;
    }

    //check if the password is at least 6 characters long
    if(password.length < 6){
        setError("Password must be at least 6 characters long.");
        return;
    }

  }
    
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
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          label="Password"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="********"
          mode="outlined"
          onChangeText={setPassword}
        />

         {/* Display error message if there is an error during authentication */}
        {error && 
          <Text style={{ color: theme.colors.error, textAlign: "center", fontStyle:"italic", marginBottom: 10 }}>{error}</Text>
        }

        <Button mode="contained" style={styles.button} onPress={handleAuth}>
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
