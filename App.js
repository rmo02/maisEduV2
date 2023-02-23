import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Calendario } from './src/screens/Calendario';
import { Provider  } from 'react-native-paper';
import theme from './src/theme';
import { Aulas } from './src/screens/Aulas';

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium});

  return (
    <Provider theme={theme}>
      {
        fontsLoaded ? <Aulas/> : <ActivityIndicator style={{flex:1, backgroundColor:'#4263EB'}}/>
      }
    </Provider>
  );
}


