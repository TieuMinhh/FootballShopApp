import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

class InputField extends Component {
  render() {
    const {
      label,
      icon,
      inputType,
      keyboardType,
      fieldButtonLabel,
      fieldButtonFunction,
      value,
      onChangeText,
    } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 6,
          marginBottom: 28,
        }}
      >
        {icon}
        {inputType === "password" ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            value={value}
            onChangeText={onChangeText}
          />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: "#6ec2f7", fontWeight: "600", marginTop: 10 }}>
            {fieldButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputField;
