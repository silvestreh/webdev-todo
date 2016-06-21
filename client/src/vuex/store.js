import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const state = {
    tasks: [],
};

const mutations = {
    FETCH_TASKS(state, tasks) {
        state.tasks = tasks;
    },

    ADD_TASK(state, task) {
        const index = _.findIndex(state.tasks, { _id: task._id, });
        if (index < 0) state.tasks.push(task);
    },

    REMOVE_TASK(state, task) {
        const index = _.findIndex(state.tasks, { _id: task._id, });
        state.tasks.$remove(state.tasks[index]);
    },

    UPDATE_TASK(state, task) {
        const index = _.findIndex(state.tasks, { _id: task._id, });
        state.tasks[index].completed = task.completed;
        state.tasks[index].task = task.task;
        state.tasks[index].priority = task.priority;
    },
};

export default new Vuex.Store({
    state,
    mutations,
});
