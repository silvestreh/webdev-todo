'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const welcomeEmail = require('./welcome-email');

exports.before = {
    all: [],
    find: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    get: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ ownerField: '_id' })
    ],
    create: [
        auth.hashPassword()
    ],
    update: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ ownerField: '_id' })
    ],
    patch: [
        auth.hashPassword(),
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    remove: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ ownerField: '_id' })
    ]
};

exports.after = {
    all: [hooks.remove('password')],
    find: [],
    get: [],
    create: [
        welcomeEmail()
    ],
    update: [],
    patch: [],
    remove: []
};
