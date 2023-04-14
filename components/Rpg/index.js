import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Rpg(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.imagem} source={{
                    uri: props.rpg.urlImagem
                }}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.nome}>{props.rpg.nome}</Text>
                <Text style={styles.descricao}>{props.rpg.ataque}</Text>
                <Text style={styles.descricao}>{props.rpg.defesa}</Text>
                <Button style={styles.button} title="Trocar"/>
            </View>
        </View>
    );
}