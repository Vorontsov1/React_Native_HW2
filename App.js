import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './router';





const App = () => {
  const routing = useRoute(true); 
  return (
    <NavigationContainer>
     {routing}
    </NavigationContainer>
  );
}

export default App;


