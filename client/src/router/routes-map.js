import forgot from 'sections/forgot';
import home from 'sections/home';
import notFound from 'sections/not-found';
import register from 'sections/register';
import resetPassword from 'sections/reset-password';
import signIn from 'sections/sign-in';

export default {
    '*': {
        component: notFound,
    },
    '/app': {
        component: home,
        auth: true,
    },
    '/forgot': {
        component: forgot,
    },
    '/login': {
        component: signIn,
    },
    '/register': {
        component: register,
    },
    '/reset': {
        component: resetPassword,
    },
};
