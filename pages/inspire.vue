<template>
  <v-row>
    <v-col class="text-center">
      <img src="https://witrac.io/wp-content/uploads/2020/08/8Recurso-7.png" class="" alt="Logo Witrac" loading="lazy" srcset="https://witrac.io/wp-content/uploads/2020/08/8Recurso-7.png 362w, https://witrac.io/wp-content/uploads/2020/08/8Recurso-7-300x41.png 300w" sizes="(max-width: 362px) 100vw, 362px">
        <h1>
          Todo List
        </h1>
    </v-col>
    <v-row>
      <v-col>
        <h2> Add your next task:</h2>
        <label for="task"></label> <br>
        <input id="task" v-model="task" @keypress.enter="addTask" />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
/* import { useAddList } from '@vue/composables/useAddList'
 */
export default defineComponent({
  name: "Inspire",
/*   setup() {
      const { task, list, addTask, deleteTask} = useAddList
      return { task, list, addTask, deleteTask }
    
  }, */
})
</script>
