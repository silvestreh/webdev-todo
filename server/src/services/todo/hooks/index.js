'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
    all: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    find: [
        auth.queryWithCurrentUser({ idField: '_id', as: 'userId' })
    ],
    get: [
        auth.restrictToOwner()
    ],
    create: [
        auth.associateCurrentUser()
    ],
    update: [
        auth.associateCurrentUser(),
        auth.restrictToOwner()
    ],
    patch: [
        auth.associateCurrentUser(),
        auth.restrictToOwner()
    ],
    remove: [
        auth.restrictToOwner()
    ]
};

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
