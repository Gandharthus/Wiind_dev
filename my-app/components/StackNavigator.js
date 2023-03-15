import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import NewScreen from './NewScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={NewScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
