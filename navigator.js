import Login from './components/Login';
import Chat from './components/Chat';
import CreateAccount from "./components/CreateAccount";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Create the navigator
const RootStack = createStackNavigator({
  Login: Login,
  Chat: Chat,
  CreateAccount: CreateAccount
});

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;