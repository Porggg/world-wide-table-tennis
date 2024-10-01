import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import CustomButton from "@/components/CustomButton";
import backImage from "@/assets/images/young-man-playing-table-tennis-black.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground source={backImage} resizeMode="cover" className="flex-1">
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0.4)", "rgba(0, 0, 0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-8 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Hello World!
              </Text>
              <Text className="text-center text-white font-regular text-2xl mt-3">
                Hello World!
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => console.log("tap")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
