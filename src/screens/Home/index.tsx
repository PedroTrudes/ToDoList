import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from './styles'

export default function Home() {
    return(
        <View style={styles.containerHome}>
            <View style={styles.containerImage}>
                <Image source={require('../../../assets/logo/logo-todolist.png')}/>
            </View>
            <View style={styles.containerForm}>
                <View style={styles.form}>
                    <TextInput 
                    style={styles.formInput} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    />
                    <TouchableOpacity style={styles.formButton}>
                        <Image source={require('../../../assets/icons/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Lista</Text>
            </View>
        </View>
    )
}