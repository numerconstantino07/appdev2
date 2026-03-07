import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TodoScreen() {

  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now().toString(), text: todo, done: false },
    ]);

    setTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const filteredTodos = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Todo List</Text>

      <TextInput
        style={styles.search}
        placeholder="Search todo..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          value={todo}
          onChangeText={setTodo}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Text style={{ fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>

            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Text
                style={[
                  styles.todoText,
                  item.done && { textDecorationLine: "line-through" },
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  search: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: "#FFCC00",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
  },

  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 10,
  },

  todoText: {
    fontSize: 16,
  },

});