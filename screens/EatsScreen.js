import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
//import Wcdonalds from "../assets/WcDonalds.jpg";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const sampleData = [
    {
      id: "123",
      title: "Wcdonalds",
      image: "https://links.papareact.com/3pn",
      screen: "EatsScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text>Select a restaurant</Text>
      <View>
        <Text>
          <View>
            <TouchableOpacity>
              <View>
                <Text>Restaurants loading...</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
