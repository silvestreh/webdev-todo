import { todoService, } from 'src/services';
import taskForm from 'components/task-form';

export default {
    components: {
        taskForm,
    },

    data: () => ({
        edit: false,
    }),

    props: [
        'data',
    ],

    events: {
        DONE_EDITING() {
            this.edit = false;
        },
    },

    methods: {
        toggleComplete() {
            this.data.completed = !this.data.completed;
            todoService.update(this.data._id, this.data);
        },

        remove() {
            todoService.remove(this.data._id);
        },

        showForm() {
            this.edit = true;
        },

        hideForm() {
            this.edit = false;
        },
    },
};
