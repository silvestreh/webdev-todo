module.exports = function (options) {
    return function (hook) {
        const email = {
            from: '/r/webdev To-Do App <noreply@somedomain.org>',
            to: hook.data.email,
            subject: 'Hello',
            html: `Welcome to Reddit's /r/webdev To-Do App :-)`
        };
        
        hook.app.service('mailer').create(email).then((result) => {
            console.log('Sent email', result);
        }).catch((err) => {
            console.log(err);
        });
    };
};
