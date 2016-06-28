import toastr from 'toastr';

const url = `${(global.location.protocol || 'http:')}//${global.location.hostname}:3030`;

export default {
    init() {
        if (!this.$route.query.token) {
            this.$router.go('/auth');
        }
    },

    data: () => ({
        password: '',
        repassword: '',
    }),

    computed: {
        validPassword() {
            return this.password.length >= 8 && (this.password === this.repassword) || false;
        },
    },

    methods: {
        changePassword() {
            const data = {
                password: this.password,
                repassword: this.repassword,
                resetPwdToken: this.$route.query.token,
            };

            this.$http.post(`${url}/updatepwd`, data)
                .then(() => {
                    toastr.success('Password updated!');
                    this.$router.go('/auth');
                })
                .catch(() => toastr.error('Something went wrong.'));
        },
    },
};
