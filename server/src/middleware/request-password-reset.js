'use strict';

const bcrypt = require('bcryptjs');

module.exports = function(app) {    
    return function(req, res, next) {
        if (!req.body.email) return res.status(500).send('No email');;

        function hash(err, salt) {
            bcrypt.hash(req.body.email + new Date(), salt, patchUser);
        }

        function patchUser(err, hash) {
            app.service('users').patch(null, { resetPwdToken: hash }, { query: { email: req.body.email } })
                .then((result) => {
                    console.log(result);
                    if (result.length) {
                        const email = {
                            from: 'no-reply@somedomain.org',
                            to: req.body.email,
                            subject: '/r/webdev To-Do Password reset',
                            html: `<h1>You've requested to reset your password.</h1>` +
                                  `<p>Click <a href="http://${app.get('host')}:${app.get('port')}/#!/reset?token=${hash}">here</a> to reset it</p>` +
                                  `<p>If the link above doesn't work copy the following:</p>` +
                                  `<pre>http://${app.get('host')}:${app.get('port')}/#!/reset?token=${hash}</pre>`
                        };

                        app.service('mailer').create(email).then((result) => {
                            console.log('Sent email', result);
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                    res.status(200).send('Sent');
                });
        }

        bcrypt.genSalt(10, hash);
    };
};
