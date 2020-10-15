import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/components/Index';
import AddData from './src/components/AddData'
import recipescreen from './src/screens/recipescreen'

const navigator = createStackNavigator({

  Index: Index,
  Add: AddData,
  recipe: recipescreen


},{
    initialRouteName: 'Index',
    title: 'RecipesHub'
});

export default createAppContainer(navigator);