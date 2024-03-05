import { s } from "./ButtonConvert.style";
import { Text, TouchableOpacity } from "react-native";

export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.buttonText}> Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
