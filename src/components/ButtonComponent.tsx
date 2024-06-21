import React from "react"
import { Pressable, Text } from "react-native"
import {ButtonComponentStyles} from "./styles"

interface ButtonComponentProps{
    onPress: () => void,
    text: string
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({onPress, text}) =>  {
    
    return(
        <>
            <Pressable
            onPress={onPress}
            accessibilityLabel="Hash a password for batman"
            style={ButtonComponentStyles.button}            
            >
                <Text style={ButtonComponentStyles.text}>{text}</Text>
            </Pressable>
        </>
    )
}

export default ButtonComponent;