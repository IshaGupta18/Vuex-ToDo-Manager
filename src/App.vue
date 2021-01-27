<template>
  <div id="app">
    <div class="container">
      <AddToDo />
      <FilterToDos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import FilterToDos from './components/FilterToDos';
export default {
  name: 'App',
  components: {
    Todos,
    AddToDo,
    FilterToDos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
