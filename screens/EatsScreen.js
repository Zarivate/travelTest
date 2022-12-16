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
      address: "9 E. Wild Rose St.Eau Claire, WI 54701",
      rating: 4.5,
      genre: "Fast food",
    },
    {
      id: "456",
      title: "exquisite",
      image: remy,
      screen: "EatsScreen",
      description: "The one from Pixar that makes the good food",
      address: "109A South Dr. Rock Hill, SC 29730",
      rating: 5,
      genre: "Italian",
    },
    {
      id: "789",
      title: "All American",
      image: chicken,
      screen: "EatsScreen",
      description: "An actually normal restaurant ",
      address: "33 Henry St. Grand Blanc, MI 48439",
      rating: 1.5,
      genre: "American",
    },
    {
      id: "101112",
      title: "godly",
      image: kingMeat,
      screen: "EatsScreen",
      description: "Ungodly flavor not even the Gods could believe",
      address: "233 Third Street Montgomery, AL 36109",
      rating: 4.7,
      genre: "Seafood",
    },
    {
      id: "131415",
      title: "fun",
      image: bigW,
      screen: "EatsScreen",
      description: "Something special just for you",
      address: "95 Bay Dr. Stillwater, MN 55082",
      rating: 5,
      genre: "Sonic",
    },
    {
      id: "161718",
      title: "Annette",
      image: angery,
      screen: "EatsScreen",
      description: "Anime girl cuisine served by kind waitresses",
      address: "8 Bayport St. Port Charlotte, FL 33952",
      rating: 3.5,
      genre: "Anime",
    },
    {
      id: "192021",
      title: "Cursed",
      image: theRat,
      screen: "EatsScreen",
      description:
        "Do not ever go here, you will only find pain and suffering and lotsa cheese.",
      address: "7142 Beechwood Rd. Los Banos, CA 93635",
      rating: 1.7,
      genre: "Awful",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView>
        <View style={tw`relative`}>
          {sampleData.map((data) => {
            return (
              <>
                <Image
                  source={data.image}
                  style={tw`w-full h-56 bg-gray-300 p-4`}
                />
                <View style={tw`bg-white`}>
                  <View style={tw`px-4 pt-4`}>
                    <Text style={tw`text-3xl font-bold`}>{data.title}</Text>
                    <View style={tw`flex-row space-x-2 my-1`}>
                      <View style={tw`flex-row items-center space-x-1`}>
                        <StarIcon color="green" opacity={0.5} size={22} />
                        <Text className="text-xs text-gray-500">
                          <Text className="text-green-500">{data.rating}</Text>{" "}
                          - {data.genre}
                        </Text>
                      </View>

                      <View style={tw`flex-row items-center space-x-1`}>
                        <MapPinIcon color="gray" opacity={0.6} size={22} />
                        <Text style={tw`text-xs text-gray-500`}>
                          Nearby - {data.address}{" "}
                        </Text>
                      </View>
                    </View>
                    <Text style={tw`text-gray-500 mt-2 pb-4`}>
                      {data.description}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={tw`flex-row items-center space-x-2 p-4 border-y border-gray-300`}
                  >
                    <QuestionMarkCircleIcon
                      color="gray"
                      opacity={0.6}
                      size={20}
                    />
                    <Text style={tw`pl-2 flex-1 text-md font-bold`}>
                      Have a food allergy? Good
                    </Text>
                    <ChevronRightIcon color="#00CCBB" />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
