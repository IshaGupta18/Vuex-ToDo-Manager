<template>
    <div>
        <h3> Todos </h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div @dblclick="onDblClick(todoItem)" v-for="todoItem in getToDos" class="todo" :key="todoItem.id" v-bind:class="{'is-complete': todoItem.completed}">
                {{ todoItem.title }}
                <i @click="removeToDo(todoItem.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'; // to map the getters we want to use
export default {
    name: "Todos",
    methods: {
        ... mapActions(['fetchToDos', 'removeToDo', 'updateToDo']), // mapped the fetchToDos function to this component
        onDblClick(todoItem){
            const updatedTodo = {
                id : todoItem.id,
                title : todoItem.title,
                completed : !todoItem.completed
            }
            this.updateToDo(updatedTodo);
        }
    },
    computed: mapGetters(['getToDos']),
    // component on getting mounted
    created() {
        this.fetchToDos();
    }
}
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>