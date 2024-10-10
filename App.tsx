import { StyleSheet, Text, View } from "react-native";
import Auth from "./components/Auth";
import { Provider } from "react-redux";
import store from "./redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Payment from "./screens/Payment/Payment";
import SingleDonationItem from "./screens/SingleDonationItem/SingleDonationItem";

const Stack = createNativeStackNavigator();

const MainContainer = () => {
  // console.log("hello Home");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen
          name="SingleDonationItem"
          component={SingleDonationItem}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
