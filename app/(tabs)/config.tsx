import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

type Match = {
  id: string;
  name: string;
};

const Config = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Match[]>([]);
  const token = process.env.EXPO_PUBLIC_SPORTDEVS_API_KEY;
  console.log(token);
  const getLiveMatches = async () => {
    try {
      const response = await fetch(
        "https://table-tennis.sportdevs.com/matches-live",
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((match) => (
          <View key={match.id} style={{ marginBottom: 16 }}>
            <Text>Name: {match.name}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Config;
