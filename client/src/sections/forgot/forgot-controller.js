import app from 'src/feathers/app';
import authMenu from 'components/auth-menu';
import toastr from 'toastr';
import validator from 'validator';

const url = `${(global.location.protocol || 'http:')}//${global.location.hostname}:3030`;

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
        };
    },

    computed: {
        validEmail() {
            return validator.isEmail(this.email);
        },
    },

    methods: {
        resetPasswd() {
            this.$http.post(`${url}/reset`, { email: this.email, })
                .then(() => {
                    toastr.info('If the account exists, you\'ll receive an email shortly.');
                    this.$router.go('/login');
                });
        },
    },
};
