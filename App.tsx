import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme';

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
    const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />
            {/* Alterado SignIn -> Home para fácil visualização durante desenvolvimento  */}
            {fontsLoad ? <Home /> : <Loading />}
        </NativeBaseProvider>
    );
}
