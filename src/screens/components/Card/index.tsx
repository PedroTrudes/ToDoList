import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
    taskName: string,
    taskDoneCheck: React.Dispatch<React.SetStateAction<number>>;
    removeTask: (isChecked: boolean) => void;
}

export function Card({taskName, taskDoneCheck, removeTask}: Props) {
    const [isSelected, setSelection] = useState(false);


    const toggleCheckbox = () => {
        if(!isSelected){
            taskDoneCheck(prev => prev + 1);
        }else{
            taskDoneCheck(prev => prev - 1);
        }

        setSelection(!isSelected);
    };


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCheckbox}>
                <View style={[styles.checkbox, isSelected && styles.checkedBox]}>
                    <MaterialIcons name="check" size={20} color="#fff" style={[styles.cardIcon, isSelected && styles.cardIconActive]}/>
                </View>
            </TouchableOpacity>
            <Text style={[styles.cardText, isSelected && styles.cardTextChecked]}>{taskName}</Text>
            <TouchableOpacity onPress={() => removeTask(isSelected)}>
                <MaterialIcons name="delete" size={23} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}