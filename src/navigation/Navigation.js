import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
};

export default (Navigator = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
})