import auth from 'sections/auth';
import home from 'sections/home';
import notFound from 'sections/not-found';
import resetPassword from 'sections/reset-password';

export default {
    '*': {
        component: notFound,
    },
    '/auth': {
        component: auth,
    },
    '/': {
        component: home,
        auth: true,
    },
    '/reset': {
        component: resetPassword,
    },
};
