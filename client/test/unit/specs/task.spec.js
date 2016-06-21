import Vue from 'vue';
import task from 'src/components/task';

describe('task.vue', () => {
    it('should render correct contents', () => {
        const data = {
            task: 'Learn Javascript',
            priority: 'high',
            completed: true,
        };

        const vm = new Vue({
            template: '<div><task :data="data"></task></div>',

            components: {
                task,
            },

            data: () => ({
                data,
            }),
        }).$mount();

        expect(vm.$el.querySelector('.task span').textContent).to.contain('Learn Javascript');
    });
});
