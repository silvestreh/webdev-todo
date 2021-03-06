import * as actions from 'src/vuex/actions';
import app from 'src/feathers/app';
import task from 'components/task';
import taskForm from 'components/task-form';

export default {
    vuex: {
        getters: {
            tasks: state => state.tasks,
        },
        actions,
    },

    data: () => ({
        newTask: {
            task: '',
            priority: 'low',
        },
        sortBy: global.localStorage.getItem('sortBy') || 'date',
        showOptions: false,
        loading: false,
    }),

    computed: {
        todos() {
            if (this.sortBy === 'priority') {
                return this.tasks.sort((a, b) => {
                    const priorities = {
                        high: 2,
                        medium: 1,
                        low: 0,
                    };

                    if (priorities[a.priority] < priorities[b.priority]) return 1;
                    if (priorities[a.priority] > priorities[b.priority]) return -1;
                    return 0;
                }).filter(task => !task.completed);
            }
            return this.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .filter(task => !task.completed);
        },

        completed() {
            return this.tasks.filter(task => task.completed);
        },
    },

    components: {
        task,
        taskForm,
    },

    ready() {
        this.loading = true;
        this.fetchTasks(() => {
            this.loading = false;
        });
        this.watchCreated();
        this.watchUpdated();
        this.watchRemoved();
    },

    methods: {
        sort(type) {
            this.sortBy = type;
            this.showOptions = false;
            global.localStorage.setItem('sortBy', type);
        },

        logOut() {
            app.logout();
            this.$router.go('/login');
        },

        toggleOptions() {
            this.showOptions = !this.showOptions;
        },

        hideOptions() {
            setTimeout(() => {
                this.showOptions = false;
            }, 100);
        },
    },
};
