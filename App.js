import 'react-native-gesture-handler';
import Home from './screens/home';
import VideoConferencePage from './screens/video_conference_page';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
export default function App(){

  const Stack = createNativeStackNavigator();
  return(
   <NavigationContainer>
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="Home" 
      component={Home} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="VideoConferencePage" 
      component={VideoConferencePage} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}