import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

//Using expo vector icons for tab bar icons

export default function TabsLayout() {
  return (
      <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
        <Tabs.Screen 
        name="index"
         options={{
          title: "Home",
           tabBarIcon: ({color}) => (
           <Entypo name="home" size={24} color={color} />
           ),
           }} 
            />
        <Tabs.Screen 
        name="Login" 
        options={{
          title: "Login",
          tabBarIcon: ({color}) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
          }} />
      </Tabs>
  )
}
