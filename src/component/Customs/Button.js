import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class Button extends Component {
  render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#6ec2f7",
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 16,
            color: "#fff",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
