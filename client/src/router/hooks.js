import app from 'src/feathers/app';

export const authHook = (transition) => {
    if (transition.to.auth) {
        app.authenticate()
            .then(() => {
                transition.next();
            })
            .catch(() => transition.redirect('/auth'));
    } else {
        transition.next();
    }
};
