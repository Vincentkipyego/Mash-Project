import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwersome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({route}) =>(
      {
        tabBarIcon : ({focused,size,color}) => {
          let iconName;
        if(route.name ==='Screen_A')
      {
        iconName= 'autoprefixer';
        size = focused? 25 : 20;
        color= focused? 'green' : 'blue'
      }
    else if (route.name ==='Screen_B')
  {
        iconName='btc';
        size = focused? 25 : 20;
          color= focused? 'green' : 'blue'
        
  }
  return(
    <FontAwersome5
    name= {iconName}
    size={size}
    color= {color}/>
    
  )
}
    }
    )}
    tabBarOptions ={{
      activeTintColor : 'black',
      inactiveTintColor : 'purple',
      activeBackgroundColor: 'grey',
      inactiveBackgroundColor : 'white',
    }}>
     <Tab.Screen name="Screen_A" component={ScreenA}/>
     <Tab.Screen  name="Screen_B"  component={ScreenB}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop :50,
  },
  
});
