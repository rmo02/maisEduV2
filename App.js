import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Provider  } from 'react-native-paper';
import theme from './src/theme';
import { AuthProvider } from './src/context/AuthContext';
import {Routes} from './src/routes/index';



export default function App() {
  const [fontsLoaded] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium});

  return (
    <Provider theme={theme}>
    <AuthProvider>
    {
      fontsLoaded ? <Routes />
      : <ActivityIndicator style={{flex:1, backgroundColor:'#4263EB'}}/>
    }
    <StatusBar backgroundColor={'transparent'} translucent/>
    </AuthProvider>
    </Provider>
  );
}


