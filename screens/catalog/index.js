import { createStackNavigator } from '@react-navigation/stack';
import CatalogCategoriesScreen from '../../components/catalog/categories';
import CatalogPostsScreen from '../../components/catalog/posts';

const Stack = createStackNavigator();

export default function CatalogScreen() {    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='catalog.categories'
                component={CatalogCategoriesScreen}
                options={{
                    title: 'Каталог'
                }}
            />
            <Stack.Screen
                name='catalog.posts'
                component={CatalogPostsScreen}
                options={{
                    title: 'Цитаты'
                }}
            />
        </Stack.Navigator>
    );
};