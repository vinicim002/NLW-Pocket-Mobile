import { IconTicket } from "@tabler/icons-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { s } from "./styles";


export function Place(){
    return (
        <TouchableOpacity style={s.container}>
            <Image style={s.image} />

            <View style={s.content}>
                <Text style={s.name}></Text>
                <Text style={s.description}></Text>
                
                <View style={s.footer}>
                    <IconTicket></IconTicket>
                </View>
            </View>
        </TouchableOpacity>
    )
}