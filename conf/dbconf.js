var conf = {};
console.log(process.env.MONGO_PWD);
conf = { user : '',
          pwd : process.env.MONGO_PWD,
          url : 'localhost',
          port: '27017',
          db: 'dev-food-transport' };

conf.mongoUrl = conf.user + ':' + conf.pwd +
  '@' + conf.url + ':' + conf.port + '/' + conf.db;

module.exports = conf;
