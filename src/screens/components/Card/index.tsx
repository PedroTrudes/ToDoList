import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export function Card() {
    const [isSelected, setSelection] = useState(false);

    const toggleCheckbox = () => {
        setSelection(!isSelected);
    };
    const toggleRemoved = () => {
        
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCheckbox}>
                <View style={[styles.checkbox, isSelected && styles.checkedBox]}>
                    <MaterialIcons name="check" size={20} color="#fff" style={[styles.cardIcon, isSelected && styles.cardIconActive]}/>
                </View>
            </TouchableOpacity>
            <Text style={[styles.cardText, isSelected && styles.cardTextChecked]}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
            <TouchableOpacity onPress={toggleRemoved}>
                <MaterialIcons name="delete" size={23} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}