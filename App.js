import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/components/Index';
import AddData from './src/components/AddData'
import recipescreen from './src/screens/recipescreen'
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({

  Index: Index,
  Add: AddData,
  recipe: recipescreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen




},{
    initialRouteName: 'Search',
    title: 'RecipesHub'
});

export default createAppContainer(navigator);