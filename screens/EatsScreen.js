import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import wcdonalds from "../assets/WcDonaldsLogo.jpg";
import remy from "../assets/Remy.jpg";
import kingMeat from "../assets/kingMeat.png";
import angery from "../assets/Angery.png";
import theRat from "../assets/theRat.jpg";
import bigW from "../assets/epic.jpg";
import chicken from "../assets/chicken.jpg";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const sampleData = [
    {
      id: "123",
      title: "Wcdonalds",
      image: wcdonalds,
      screen: "EatsScreen",
      description: "No copyright, all original beef",
    },
    {
      id: "456",
      title: "exquisite",
      image: remy,
      screen: "EatsScreen",
      description: "The one from Pixar that makes the good food",
    },
    {
      id: "789",
      title: "exquisite",
      image: chicken,
      screen: "EatsScreen",
      description: "An actually normal restaurant ",
    },
    {
      id: "101112",
      title: "godly",
      image: kingMeat,
      screen: "EatsScreen",
      description: "Ungodly flavor not even the Gods could believe",
    },
    {
      id: "131415",
      title: "fun",
      image: bigW,
      screen: "EatsScreen",
      description: "Something special just for you",
    },
    {
      id: "161718",
      title: "Annette",
      image: angery,
      screen: "EatsScreen",
      description: "Anime girl cuisine served by kind waitresses",
    },
    {
      id: "192021",
      title: "Cursed",
      image: theRat,
      screen: "EatsScreen",
      description:
        "Do not ever go here, you will only find pain and suffering and lotsa cheese.",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView>
        <View className="relative">
          {sampleData.map((data) => {
            return (
              <>
                <Image
                  source={{
                    uri: data.image,
                  }}
                  className="w-full h-56 bg-gray-300 p-4"
                />
                <View className="bg-white">
                  <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{data.title}</Text>
                    <View className="flex-row space-x-2 my-1">
                      <View className="flex-row items-center space-x-1">
                        <StarIcon color="green" opacity={0.5} size={22} />
                      </View>

                      <View className="flex-row items-center space-x-1">
                        <MapPinIcon color="gray" opacity={0.6} size={22} />
                        <Text className="text-xs text-gray-500">
                          Nearby - {address}{" "}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">
                      {data.description}
                    </Text>
                  </View>

                  <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon
                      color="gray"
                      opacity={0.6}
                      size={20}
                    />
                    <Text className="pl-2 flex-1 text-md font-bold">
                      Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="#00CCBB" />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
