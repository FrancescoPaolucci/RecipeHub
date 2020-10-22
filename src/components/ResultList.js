import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import ResultsDetails from "../components/ResultsDetail";
import getRecipes from "../components/getRecipes";
import { withNavigation } from "react-navigation";


const ResultList = ({ title, navigation }) => {
  const [recipes, hasError] = getRecipes();

    console.log(navigation);

    const deleteRecipe = async (id) => {
      const response = await fetch(
        "https://ringed-bebop-293214.appspot.com/rest/Recipeservice/deleterecipe/" +
          id,
        {
          method: "DELETE",
        }
      );
    };
  

  const createTwoButtonAlert = (param) =>
    Alert.alert(
      "You are going to delete this recipe",
      "Are you sure you wanna delete it ?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteRecipe(param.id) },
      ],
      { cancelable: false }
    );

  return (
    <View style={{ marginTop: 50 }}>
      <Text>{title} </Text>
      <Text>{hasError} </Text>
      <FlatList
        horizontal={true}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
<<<<<<< HEAD
              onPress={() =>navigation.navigate("recipe",{recipeId: item.id})}
=======
              onPress={() => navigation.navigate('recipe',{method: item.method})}
>>>>>>> 6c3abb316f9f0354dab3003bf156764994169d61
              onLongPress={() => createTwoButtonAlert(item)}
            >
              <View>
                <ResultsDetails result={item} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(ResultList);
