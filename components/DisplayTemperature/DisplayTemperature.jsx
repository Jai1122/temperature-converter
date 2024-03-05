import { s } from "./DisplayTemperature.style";
import { Text } from "react-native";

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={s.temperatureText}>
      {temperature} {unit}
    </Text>
  );
}
