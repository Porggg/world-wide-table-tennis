import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";

type League = {
  id: string;
  name: string;
  importance: string;
  most_titles: string;
  primary_color: string;
  secondary_color: string;
  start_league: string;
  end_league: string;
  hash_image: string;
  class_id: string;
  class_name: string;
  class_hash_image: string;
};

const Events = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<League[]>([]);
  const token = process.env.EXPO_PUBLIC_SPORTDEVS_API_KEY;
  const getLiveMatches = async () => {
    try {
      const date = new Date().toISOString().split("T")[0];
      const response = await fetch(
        `https://table-tennis.sportdevs.com/leagues`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLiveMatches();
  }, []);
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View>
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Events
          </Text>
          <Text className="text-indigo-100 text-xl font-medium  ">
            Here are all the current events !
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          // data.map((match) => (
          //   <View key={match.id} style={{ marginBottom: 16 }}>
          //     <Text>Name: {match.name}</Text>
          //   </View>
          <FlatList
            data={data}
            className="mb-20"
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              console.log(item.hash_image),
              (
                <Pressable
                  onPress={() => console.log(item.id)}
                  className="h-48 my-3 rounded-md overflow-hidden"
                >
                  <ImageBackground
                    source={{
                      uri: `https://table-tennis.sportdevs.com/${item.hash_image}.png`,
                    }}
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center"
                  >
                    <Text>{item.name}</Text>
                  </ImageBackground>
                </Pressable>
              )
            )}
          ></FlatList>
        )}
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default Events;
