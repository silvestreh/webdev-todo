import forgot from 'sections/forgot';
import app from 'sections/app';
import notFound from 'sections/not-found';
import register from 'sections/register';
import resetPassword from 'sections/reset-password';
import signIn from 'sections/sign-in';

export default {
    '*': {
        component: notFound,
    },
    '/app': {
        component: app,
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
