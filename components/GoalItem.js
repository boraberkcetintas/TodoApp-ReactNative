import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteGoal.bind(this, props.id)}
                android_ripple={{ color: '#004b23', borderless: true }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text
                    style={styles.goalText}
                >
                    {(props.itemData.index + 1).toString() + ") " + props.itemData.item.text}
                </Text>
            </Pressable>
        </View >
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 6,
        backgroundColor: '#006400',
        borderRadius: 6,
    },
    goalText: {
        fontSize: 16,
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
})