import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                {props.ResultImc != null ?
                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.shared}>
                    <Text style ={styles.textShared}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
        </View>
    );
}