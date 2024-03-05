import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { useEffect, useState } from "react";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackGround, setcurrentBackGround] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setcurrentBackGround(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={s.backgroundImage} source={currentBackGround}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
