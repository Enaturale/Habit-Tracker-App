import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "green", tabBarActiveBackgroundColor: "lightgray"}}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => {
          return focused ?
          <FontAwesome5 name="home" size={24} color={color} /> :
          // <Ionicons name="home-outline" size={24} color="black" />
          <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />          
          },
        }}
      />
      
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Tabs>
  );
}
