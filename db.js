const { Sequelize, DataTypes } = require("sequelize");

// 从环境变量中读取数据库配置
// const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;
MYSQL_USERNAME = "root";
MYSQL_PASSWORD = "Medbot8848";
MYSQL_ADDRESS = "sh-cynosdbmysql-grp-1ore5tow.sql.tencentcdb.com:25168";
const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
  host,
  port,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

// 定义数据模型
const Counter = sequelize.define("Counter", {
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// 数据库初始化方法
async function init() {
  console.log(host + port + MYSQL_USERNAME + MYSQL_PASSWORD)
  await Counter.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Counter,
};
