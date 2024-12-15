//Configuracoes das Rotas de Navegacao 

import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { GestureHandlerRootViwe } from "react-native-gesture-handler"

import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
 } from "@expo-google-fonts/rubik"

 import { Loading } from "@/components/loading"

export default function Layout () {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    //Garantindo que a fonte seja carregada primeiro 
    if(!fontsLoaded){ 
        return <Loading /> //Se for false ele vai retornar nada
    } 

    return <Stack 
    <GestureHandlerRootViwe>
    screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
    }}/>
}