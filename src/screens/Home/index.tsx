import { Text, TextInput, TouchableOpacity, View, Image, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { Card } from "../components/Card";
import { useState } from "react";

export default function Home() {
    const [listTask, setListTask] = useState<string[]>([]);
    const [task, setTask] = useState('');
    const [taskDone, setTaskDone] = useState<number>(0);

    if(taskDone < 0){
        setTaskDone(0);
    }

    function addItemList(){
        if(listTask.includes(task)){
            return Alert.alert('Task ja registrada')
        }

        setListTask(prev => [...prev, task]);
        setTask('');
    }

    function deleteItemList(itemList: string, isChecked: boolean) {
        Alert.alert('Remover', 'Remover item da lista?', [
            {
                text: 'Sim',
                onPress: () => {
                    Alert.alert('Deletado com sucesso')
                    setListTask(prev => prev.filter
                        (item => item !== itemList));

                        if(isChecked == true){
                            setTaskDone(prev => prev - 1)
                        }
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

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
                    onChangeText={text => setTask(text)}
                    value={task}
                    />
                    <TouchableOpacity style={styles.formButton}
                    onPress={addItemList}
                    >
                        <Image source={require('../../../assets/icons/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerList}>
                <View style={styles.containerItens}>
                    <View style={styles.item}>
                        <Text style={{color: "#4EA8DE"}} >Criadas</Text>
                        <Text style={styles.itemNumber}>{listTask.length}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: "#8284FA"}}>Concluidas</Text>
                        <Text style={styles.itemNumber}>{taskDone}</Text>
                    </View>
                </View>
                <FlatList 
                data={listTask}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Card 
                    key={item}
                    taskName={item}
                    removeTask={(isChecked) => deleteItemList(item, isChecked)}
                    taskDoneCheck={setTaskDone}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.containerListEmpty}> 
                        <View style={styles.divider}></View>
                        <Image source={require('../../../assets/icons/Clipboard.png')}/>

                        <Text style={styles.listEmptyTextPrimary}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptyTextSecundary}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
                />
            </View>

        </View>
    )
}