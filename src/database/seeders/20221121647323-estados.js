'use strict';

const estados = ['pendiente', 'finalizado', 'cancelado'];

const statuses = estados.map(status =>({
    name: status,
    createdAt: new Date()
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Statuses', statuses, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
    
  }
};