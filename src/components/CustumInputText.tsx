import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface CustomTextInputProps {
  customStateFunction?: (value: string) => void;
  placeholder?: string; // Adicionando a propriedade placeholder
}

export default function CostumInputText({
  customStateFunction,
  placeholder,
  onChangeText,
  ...props
}: CustomTextInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = (text: any) => {
    setInputValue(text);

    if (customStateFunction) {
      customStateFunction(text);
      console.log(text);
    }
    if (onChangeText) {
      onChangeText(text); // Chama a função fornecida onChangeText, se existir
    }
  };

  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={handleTextChange}
      placeholder={placeholder}
      placeholderTextColor="#B1C0D7"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    width: "90%",
    marginBottom: 10,
    paddingHorizontal: 14,
    backgroundColor: "#1E283C",
    fontSize: 18,
    color: "#fff",
    borderRadius: 6,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 26,
  },
});
