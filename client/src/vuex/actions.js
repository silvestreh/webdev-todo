import { todoService, } from 'src/services';

export const fetchTasks = ({ dispatch, }, cb) => {
    todoService.find().then((tasks) => {
        dispatch('FETCH_TASKS', tasks.data);
        if (cb && typeof cb === 'function') cb();
    });
};

export const watchCreated = ({ dispatch, }) => {
    todoService.on('created', result => dispatch('ADD_TASK', result));
};

export const watchUpdated = ({ dispatch, }) => {
    todoService.on('updated', result => dispatch('UPDATE_TASK', result));
};

export const watchRemoved = ({ dispatch, }) => {
    todoService.on('removed', result => dispatch('REMOVE_TASK', result));
};
