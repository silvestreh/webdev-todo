module.exports = function(app) {
    return function(req, res, next) {
        const password = req.body.password;
        const resetPwdToken = req.body.resetPwdToken;

        console.log(password, resetPwdToken);

        app.service('users').patch(null, { password, resetPwdToken: null }, { query: { resetPwdToken } })
            .then((result) => {
                console.log(result);
                res.status(200).send(true);
            });

    };
};
