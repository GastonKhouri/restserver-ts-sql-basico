import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
});

export default db;