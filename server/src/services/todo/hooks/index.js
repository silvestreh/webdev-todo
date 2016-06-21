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
        auth.restrictToOwner({ idField: '_id', ownerField: 'userId' })
    ],
    create: [
        auth.associateCurrentUser({ idField: '_id', as: 'userId' })
    ],
    update: [
        auth.associateCurrentUser({ idField: '_id', as: 'userId' }),
        auth.restrictToOwner({ idField: '_id', ownerField: 'userId' })
    ],
    patch: [
        auth.associateCurrentUser({ idField: '_id', as: 'userId' }),
        auth.restrictToOwner({ idField: '_id', ownerField: 'userId' })
    ],
    remove: [
        auth.restrictToOwner({ idField: '_id', ownerField: 'userId' })
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
