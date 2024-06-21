import React from "react";
import { Text, View,   } from "react-native"

import ButtonComponent from "../components/ButtonComponent"
import { HomeStyle } from "./styles"
import { useState } from "react";
import genPassword from "../service/passwordService";
import * as Clipboard from 'expo-clipboard';

const Home = ()=> {
    const [password, setPassword] = useState("");
    const [showHash, setShowHash] = useState(false);
    const onPress = () => {
        setShowHash(true)
        setPassword(genPassword());
    }

    const copyToClipboard = () => {
        Clipboard.setStringAsync(password);
        alert('Senha copiada para a área de transferência!');
      };

    return(
        <View style = {HomeStyle.container}>
            {showHash &&<Text style={HomeStyle.text}>{password}</Text>}
            <ButtonComponent onPress={onPress} text="Generate"/>
            <ButtonComponent onPress={copyToClipboard} text="Copy"/>
        </View>
    );
}


export default Home