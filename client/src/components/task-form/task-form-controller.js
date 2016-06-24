import { todoService, } from 'src/feathers/services';

export default {
    props: [
        'data',
        'edit',
        'action',
        'visible',
    ],

    data: () => ({
        original: {
            task: '',
            priority: '',
        },
    }),

    ready() {
        this.original.task = this.data.task;
        this.original.priority = this.data.priority;
    },

    methods: {
        create() {
            if (this.data.task.trim()) {
                todoService.create(this.data)
                    .then(() => {
                        this.data.task = '';
                        this.data.priority = 'low';
                    })
                    .catch((error) => {
                        throw new Error(error);
                    });
            }
        },

        update() {
            todoService.update(this.data._id, this.data)
                .then(() => {
                    this.original.task = this.data.task;
                    this.original.priority = this.data.priority;
                    this.hide();
                });
        },

        remove() {
            todoService.remove(this.data._id);
        },

        hide() {
            this.data.task = this.original.task;
            this.data.priority = this.original.priority;
            this.$dispatch('DONE_EDITING');
        },
    },
};
