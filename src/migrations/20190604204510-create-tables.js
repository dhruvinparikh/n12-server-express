/* eslint-disable*/
'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "permissions", deps: []
 * createTable "roles", deps: []
 * createTable "users", deps: []
 * createTable "permission_roles", deps: [permissions, roles]
 * createTable "user_roles", deps: [users, roles]
 *
 **/

var info = {
  revision: 1,
  name: 'create-tables',
  created: '2019-06-10T22:26:41.821Z',
  comment: '',
};

var migrationCommands = [
  {
    fn: 'createTable',
    params: [
      'permissions',
      {
        permissionId: {
          type: Sequelize.UUID,
          field: 'permission_id',
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          field: 'name',
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: 'createTable',
    params: [
      'roles',
      {
        roleId: {
          type: Sequelize.UUID,
          field: 'role_id',
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          field: 'name',
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: 'createTable',
    params: [
      'users',
      {
        userId: {
          type: Sequelize.UUID,
          field: 'user_id',
          primaryKey: true,
          defaultValue: Sequelize.UUIDV1,
        },
        accessToken: {
          type: Sequelize.TEXT,
          field: 'access_token',
        },
        username: {
          type: Sequelize.STRING,
          field: 'username',
        },
        password: {
          type: Sequelize.STRING,
          field: 'password',
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: 'createTable',
    params: [
      'permission_roles',
      {
        permissionId: {
          type: Sequelize.UUID,
          unique: 'permission_roles_roleId_permissionId_unique',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          field: 'permission_id',
          references: {
            model: 'permissions',
            key: 'permission_id',
          },
        },
        roleId: {
          type: Sequelize.UUID,
          unique: 'permission_roles_roleId_permissionId_unique',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          field: 'role_id',
          references: {
            model: 'roles',
            key: 'role_id',
          },
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: 'createTable',
    params: [
      'user_roles',
      {
        userId: {
          type: Sequelize.UUID,
          unique: 'user_roles_userId_roleId_unique',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          field: 'user_id',
          references: {
            model: 'users',
            key: 'user_id',
          },
        },
        roleId: {
          type: Sequelize.UUID,
          unique: 'user_roles_userId_roleId_unique',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          field: 'role_id',
          references: {
            model: 'roles',
            key: 'role_id',
          },
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
        },
      },
      {},
    ],
  },
];

module.exports = {
  pos: 0,
  up: function(queryInterface, Sequelize) {
    var index = this.pos;
    return new Promise(function(resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log('[#' + index + '] execute: ' + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        } else resolve();
      }
      next();
    });
  },
  info: info,
};
