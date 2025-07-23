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
                initialRouteName='home'
            >
                <Tab.Screen
                    name='home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}
                            />
                        ),
                        title: 'Início'
                    }}
                />
               <Tab.Screen
                    name='horario'
                    component={HorarioScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="calendar"
                                size={size}
                                color={color}
                            />
                        ),
                        title: 'Horário'
                    }}
                />
               <Tab.Screen
                    name='ajuda'
                    component={AjudaScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="help-circle"
                                size={size}
                                color={color}
                            />
                        ),
                        title: 'Ajuda'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}