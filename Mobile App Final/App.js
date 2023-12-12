import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { MainStackNavigator } from './navigation/MainStackNavigator';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    UserProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
