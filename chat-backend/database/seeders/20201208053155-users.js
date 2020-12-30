'use strict';

const bycrypt = require('bcrypt')



module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
      {
         firstName:'janith',
         lastName:'Rathnayaka',
         email:'tosee4976@gmail.com',
         password:bycrypt.hashSync('12345',10),
         gender:'male'
      },
      {
        firstName:'Jane',
        lastName:'smith',
        email:'tosee497676@gmail.com',
        gender:'female'
     },
     {
      firstName:'john',
      lastName:'Doe',
      email:'df4976@gmail.com',
      gender:'male'
   }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
