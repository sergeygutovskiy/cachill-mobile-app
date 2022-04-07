import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import PostModal from './components/post-modal';
import PostModalContext from './lib/contexts/post-modal';
import CatalogScreen from './screens/catalog';
import HomeScreen from './screens/home';
import RatingScreen from './screens/rating';
import SearchScreen from './screens/search';

const Tab = createBottomTabNavigator();

export default function App() {
    const [ modal, setModal ] = useState({
        open: false,
        post: null,
    });
    
    const openModal = post => {
        setModal({
            open: true,
            post: post,
        });
    }

    const closeModal = () => {
        setModal(prevState => ({
            open: false,
            post: prevState.post,
        }));
    }

    return (
        <PostModalContext.Provider value={{
            openModal,
            closeModal,
        }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelPosition: 'beside-icon',
                        tabBarLabelStyle: {
                            marginLeft: 0,
                            fontWeight: '700',
                            fontSize: 18,
                        },
                        tabBarIconStyle: { display: 'none' },
                        tabBarActiveTintColor: '#333',
                        tabBarInactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen 
                        name='home' 
                        component={HomeScreen}
                        options={{
                            title: '🎲'
                        }}
                    />
                    <Tab.Screen 
                        name='rating' 
                        component={RatingScreen}
                        options={{
                            title: '🔥'
                        }}
                    />
                    <Tab.Screen 
                        name='catalog' 
                        component={CatalogScreen}
                        options={{
                            title: '📙',
                            headerShown: false,
                        }}
                    />
                    <Tab.Screen 
                        name='search' 
                        component={SearchScreen}
                        options={{
                            title: '👀'
                        }}
                    />
                </Tab.Navigator>
                <PostModal 
                    modal={modal} 
                    close={closeModal}
                />
            </NavigationContainer>
        </PostModalContext.Provider>
    );
};