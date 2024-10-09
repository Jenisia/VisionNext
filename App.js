import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import Register from './Register';
import AdminCompanyList from './AdminCompanyList';
import CompanyListing from './CompanyListing';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="AdminCompanyList" component={AdminCompanyList} options={{ title: 'Admin Company List' }} />
        <Stack.Screen name='CompanyListing' component={CompanyListing} options={{title: 'Company list'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // Ensure there's only one default export here
