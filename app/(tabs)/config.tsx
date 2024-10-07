import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

type Match = {
  home_team_id: string;
};

const Config = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Match[]>([]);
  const getLiveMatches = async () => {
    try {
      const response = await fetch(
        "https://table-tennis.sportdevs.com/matches-live",
        {
          headers: {
            Authorization: `Bearer xXxXxXxXxXxXxXxXxXxX`,
          },
        }
      );
      const json = await response.json();
      console.log(json[0].home_team_id);
      setData(json[0].home_team_id);
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
      {isLoading ? <ActivityIndicator /> : <Text>{data}</Text>}
    </View>
  );
};

export default Config;
