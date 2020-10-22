import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { withNavigation } from "react-navigation";

const RecipeScreen = () => {
  return (
  <View style={styles.container}>
  <Text>{this.props.route.params.item.id}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default withNavigation(RecipeScreen);
