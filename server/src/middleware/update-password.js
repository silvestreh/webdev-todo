module.exports = function(app) {
    return function(req, res, next) {
        const password = req.body.password;
        const repassword = req.body.repassword;
        const resetPwdToken = req.body.resetPwdToken;

        if (password !== repassword) {
            return res.status(401).send(false);
        }

        app.service('users').patch(null, { password, resetPwdToken: null }, { query: { resetPwdToken } })
            .then((result) => {
                res.status(200).send(true);
            });
    };
};
