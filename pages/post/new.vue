<template>
  <div class="container">
    <h1>Nuxt-ToDo-App</h1>
    <br />
    <h3>
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="task">
            Task
          </label>
          <input v-model="task" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Task">
        </div>
        <div class="flex items-center justify-between">
          <button @click="addTask" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Post
          </button>
        </div>
      </form>
    </div>
      <br /><br />
      <table>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id">
            <td :class="{ done: task.isDone }">{{ task.name }}</td>
            <td
              v-if="task.isDone"
              class="pointer"
              @click="task.isDone = !task.isDone"
            >
              [済]
            </td>
            <td v-else class="pointer" @click="task.isDone = !task.isDone">
              [未]
            </td>
            <td class="pointer" @click="removeTask(index)">[x]</td>
            <br />
            <br />
          </tr>
        </tbody>
      </table>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

interface Task {
  name: string
  isDone: boolean
}

export default defineComponent({
  setup() {
    const state = reactive({
      task: '',
      tasks: [] as Task[],
    })

    const addTask = () => {
      const taskObj: Task = { name: state.task, isDone: false }
      state.tasks.push(taskObj)
      state.task = ''
    }

    const removeTask = (index: number) => {
      state.tasks.splice(index, 1)
    }

    return {
      ...toRefs(state),
      addTask,
      removeTask,
    }
  },
})
</script>

<style>
.container {
  text-align: center;
}

table {
  margin: 0 auto;
}

.done {
  text-decoration: line-through 3px;
}

.pointer {
  cursor: pointer;
}
</style>
