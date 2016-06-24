import { app, } from 'src/feathers/app';
import { userService, } from 'src/feathers/services';
import toastr from 'toastr';

const url = `${(global.location.protocol || 'http:')}//${global.location.hostname}:3030`;

export default {
    init() {
        app.authenticate()
            .then(() => this.$router.go('/'))
    },

    data() {
        return {
            email: '',
            password: '',
            action: 'login',
        };
    },

    computed: {
        validPassword() {
            return this.password.length > 8 || false;
        },
    },

    methods: {
        isAction(action) {
            return action === this.action;
        },

        setAction(action) {
            this.action = action;
        },

        signIn() {
            app.authenticate({
                type: 'local',
                email: this.email,
                password: this.password,
            }).then(() => {
                this.$router.go('/');
            }).catch((error) => {
                toastr.error(error.message);
                throw new Error(error);
            });
        },

        signUp() {
            userService.create({
                email: this.email,
                password: this.password,
            }).then(() => {
                this.action = 'login';
                toastr.success('Alright! Use your new credentials to sign in.');
            }).catch((error) => {
                if (error.toString().indexOf('validation') >= 0) {
                    return toastr.error('E-mail is not valid');
                }
                if (error.errmsg.indexOf('duplicate') >= 0) {
                    toastr.error(`User ${this.email} already exists.`);
                } else {
                    toastr.error('An unknown error occurred. Try again.');
                }
                throw new Error(error);
            });
        },

        resetPasswd() {
            this.$http.post(`${url}/reset`, { email: this.email, })
                .then(() => {
                    toastr.info('If the account exists, you\'ll receive an email shortly.');
                    this.setAction('login');
                });
        },
    },
};
