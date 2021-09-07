import Vue from 'vue'
import Vuex from 'vuex'
import uniqid from 'uniqid';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [


    ],
    task: { title: null, description: null },
    alert: { status: false, msg: null, color: null, type: null }
  },
  mutations: {
    addTask(state) {

      (state.task).id = uniqid()
      state.tasks = [...state.tasks, state.task]

      state.alert = { status: true, msg: 'Tarea Creada', color: 'green', type: 'success' }
      setTimeout(function () { state.alert = { status: false, msg: null, color: null, type: null } }, 2000);
    },
    deleteTask(state, id) {
      const filtered = (state.tasks).filter(t => t.id !== id)
      state.tasks = filtered
      state.alert = { status: true, msg: 'Tarea Eliminada', color: 'red', type: 'success' }
      setTimeout(function () { state.alert = { status: false, msg: null, color: null, type: null } }, 2000);
    }


  },
  actions: {
    addTaskAction(context) {
      context.commit('addTask')
    },
    deleteTaskAction(context, id) {
      context.commit('deleteTask', id)
    }

  },
  getters: {

  }
})
