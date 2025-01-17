require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
























// require('dotenv').config();

// const Sequelize = require('sequelize');

// // const sequelize = process.env.DB_URL
// //   ? new Sequelize(process.env.DB_URL)
// //   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
// //       host: 'localhost',
// //       dialect: 'postgres',
// //       dialectOptions: {
// //         decimalNumbers: true,
// //       },
// //     });


//     const sequelize =  new Sequelize('ecommerce_db','postgres' , 'Sk8board!', {
//       host: 'localhost',
//       dialect: 'postgres',
//       // dialectOptions: {
//       //   decimalNumbers: true,
//       // },
//     });

// module.exports = sequelize;



