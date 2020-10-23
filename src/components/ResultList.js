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
import { withNavigation } from "react-navigation";


const ResultList = ({ title, navigation, recipes }) => {
  

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
      <Text style={styles.title}>{title}</Text>
     
      <FlatList
        horizontal={true}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('recipe',{item: item})}
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

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    paddingLeft: 10
    
  }

});

export default withNavigation(ResultList);
