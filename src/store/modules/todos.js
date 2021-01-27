// State, getters, actions, mutations etc goes here.
import axios from 'axios';

// from application level with vuex to state to our todos component
const state = {
    toDoItems : []
}; 

// to bring this state to todo component, need a getter
const getters = {
    getToDos: (state) => state.toDoItems
};
// make a request -> get a response -> call a mutation
const actions = {
    async fetchToDos({ commit }) {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/todos?_limit=100'
        );
        // for calling the mutation
        commit('setToDos' ,res.data);
    },
    async addNewToDo ({ commit }, title) {
        const res = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', {title, completed: false}
        );
        commit('setNewToDo', res.data);
    },
    async removeToDo ({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteToDo', id);
    },
    async filterToDo ({ commit }, e){
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        commit('setToDos' ,res.data);

    },
    async updateToDo({ commit }, updatedTodo){
        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
            updatedTodo
        );
        commit('toggleToDo' ,res.data);

    }
};
// to make changes to the state
const mutations = {
    setToDos: (state, todoList) => (state.toDoItems = todoList),
    setNewToDo: (state, newToDoItem) => (state.toDoItems.unshift(newToDoItem)),
    deleteToDo: (state, id) => (state.toDoItems = state.toDoItems.filter(item => item.id !== id)),
    toggleToDo: (state, updatedTodo) => {
        const index = state.toDoItems.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.toDoItems.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}