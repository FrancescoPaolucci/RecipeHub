import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/screens/Index';
import AddData from './src/components/AddData'

const navigator = createStackNavigator({

  Index: Index,
  Add: AddData

},{
    initialRouteName: 'Index',
    title: 'RecipesHub'
});

export default createAppContainer(navigator);