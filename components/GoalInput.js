import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your TODO'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add TODO'
                            onPress={addGoalHandler}
                            color={'#38b000'}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.onCancel}
                            color={'#f94144'}
                        />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#008000'
    },
    textInput: {
        width: '90%',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: '#cccccc',
        borderRadius: 6,
        backgroundColor:'#9ef01a'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        marginHorizontal: 8,
        width: '35%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 16,
    }
})