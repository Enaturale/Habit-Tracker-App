import {Client, Account} from "react-native-appwrite";


//to connect the App to Appwrite
export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);

  //to make modifications to the authentication
  export const account = new Account(client)