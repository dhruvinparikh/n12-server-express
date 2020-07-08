'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 * addIndex "users_user_uuid" to table "users"
 * addIndex "users_username" to table "users"
 *
 **/

var info = {
    "revision": 1,
    "name": "20200708-insert-users",
    "created": "2020-07-08T19:12:02.635Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "users",
            {
                "userUuid": {
                    "type": Sequelize.UUID,
                    "field": "user_uuid",
                    "primaryKey": true,
                    "defaultValue": Sequelize.UUIDV4
                },
                "username": {
                    "type": Sequelize.STRING,
                    "field": "username"
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "created_at",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updated_at",
                    "allowNull": false
                },
                "deletedAt": {
                    "type": Sequelize.DATE,
                    "field": "deleted_at"
                }
            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "users",
            ["user_uuid"],
            {
                "indexName": "users_user_uuid",
                "name": "users_user_uuid"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "users",
            ["username"],
            {
                "indexName": "users_username",
                "name": "users_username"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
