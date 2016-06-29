import authMenu from 'components/auth-menu';
import app from 'src/feathers/app';
import { userService, } from 'src/feathers/services';
import toastr from 'toastr';
import validator from 'validator';

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

    computed: {
        validEmail() {
            return validator.isEmail(this.email);
        },
        validPassword() {
            return this.password.length >= 8 || false;
        },
    },

    methods: {
        signUp() {
            userService.create({
                email: this.email,
                password: this.password,
            }).then(() => {
                toastr.success('Alright! Use your new credentials to sign in.');
                this.$router.go('/login');
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
    },
};
