import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/components/Index';
import AddData from './src/components/AddData'
import recipescreen from './src/screens/recipescreen'
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import StartScreen from './src/screens/StartScreen';
import ResultList from './src/components/ResultList';


const navigator = createStackNavigator({

  Index: Index,
  Add: AddData,
  recipe: recipescreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Start: StartScreen,
  RecipePage: ResultList,




},{
    initialRouteName: 'Start',
    title: 'RecipesHub'
});

export default createAppContainer(navigator);