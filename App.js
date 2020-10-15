import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/screens/Index';
import AddData from './src/components/AddData'
import recipescreen from './src/components/RecipeScreen'
import ResultList from './src/components/ResultList'

const navigator = createStackNavigator({

  Index: Index,
  Add: AddData,
  Recipe: recipescreen

},{
    initialRouteName: 'Index',
    title: 'RecipesHub'
});

export default createAppContainer(navigator);