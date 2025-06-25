import { KeyboardAvoidingView, Platform, View , Text} from "react-native";


export default function AuthScreen(){
    return(
        <KeyboardAvoidingView 
        //building the app for ios and android so the content does not go under the keyboard
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View >
                <Text>Create Account</Text>
                
            </View>

        </KeyboardAvoidingView>
    )
}