import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import HorarioScreen from '../screens/HorarioScreen';
import AjudaScreen from '../screens/AjudaScreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
//const{Screen, Navigator} = createBottomTabNavigator(); - desestruturação

export default function BottomTabsRoutes(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
               <Tab.Screen
                    name='Horário'
                    component={HorarioScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="calendar"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
               <Tab.Screen
                    name='Ajuda'
                    component={AjudaScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="help-circle"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}