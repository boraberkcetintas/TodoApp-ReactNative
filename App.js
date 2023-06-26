import { Button, FlatList, StyleSheet, Text, StatusBar, View } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText != "") {
      setGoalsList((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
      endAddGoalHandler();
    }
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function starAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button
          title='Add new TODO'
          onPress={starAddGoalHandler}
          color={'#38b000'}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            fadingEdgeLength={100}
            keyboardDismissMode='on-drag'
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.id} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 7,
    marginVertical:12,
  },
  goalsTitle: {
    fontSize: 24,
    alignSelf: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
    margin: 8,
  },
});
