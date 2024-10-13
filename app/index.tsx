import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import CustomButton from "@/components/CustomButton";
import backImage from "@/assets/images/young-man-playing-table-tennis-black.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground source={backImage} resizeMode="cover" className="flex-1">
        <AppGradient colors={["rgba(0, 0, 0.4)", "rgba(0, 0, 0.8)"]}>
          <SafeAreaView className="flex-1 px1 justify-between">
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
                onPress={() => router.push("/events")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
