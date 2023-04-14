import { StyleSheet, View } from 'react-native';
import Rpg from './components/Rpg';

const listaItens= [
  {
    nome: "Espada",
    ataque: "Ataque: 40", 
    defesa: "Defesa: 10",
    urlImagem: "https://i.pinimg.com/originals/b9/bb/7a/b9bb7adf116bb895afcebe44bfea28d5.png"
  },
  {
    nome: "Machado",
    ataque: "Ataque: 30",  
    defesa: "Defesa: 20",
    urlImagem: "https://i.pinimg.com/originals/ef/cb/63/efcb6374248f350db1fa330feab0f29f.png"
  },
  {
    nome: "Escudo",
    ataque: "Ataque: 10",
    defesa: "Defesa: 40",
    urlImagem: "https://i.pinimg.com/originals/b1/ce/94/b1ce941556b7f43e7ebdf37dc468cdaa.png"
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Rpg rpg={listaItens[0]}/>
      <Rpg rpg={listaItens[1]}/>
      <Rpg rpg={listaItens[2]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
