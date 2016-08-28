import Vue from 'vue';
import task from 'src/components/task';

describe('task.vue', () => {
    let vm;

    beforeEach((done) => {
        vm = new Vue({
            template: '<div><task v-ref:task-component :data="task"></task></div>',

            data() {
                return {
                    task: {
                        _id: 1,
                        task: 'Learn Vue.js!',
                        priority: 'high',
                        completed: true,
                    },
                };
            },

            components: {
                task,
            },
        }).$mount();

        vm.$nextTick(() => done());
    });

    it('should render the task with the correct data', () => {
        expect(vm.$el.querySelector('.task span').textContent).to.contain('Learn Vue.js!');
    });

    it('should be able to toggle the task form', (done) => {
        const taskComponent = vm.$refs.taskComponent;
        taskComponent.showForm();
        expect(vm.$el.querySelector('.task span').textContent).to.contain('Learn Vue.js!');
        done();
    });
});
