import app from 'src/feathers/app';
import toastr from 'toastr';
import authMenu from 'components/auth-menu';

export default {
    init() {
        if (app.get('token')) this.$router.go('/');
    },

    components: {
        authMenu,
    },

    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        signIn() {
            app.authenticate({
                type: 'local',
                email: this.email,
                password: this.password,
            }).then(() => {
                this.$router.go('/app');
            }).catch((error) => {
                toastr.error(error.message);
                throw new Error(error);
            });
        },
    },
};
