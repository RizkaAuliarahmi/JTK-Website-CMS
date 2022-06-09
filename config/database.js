module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'webjtkb3.ldupa.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'WebsiteJTK-3B'),
        uri: env('DATABASE_URI', 'mongodb://Kelompok3B:Kelompok3B@webjtkb3-shard-00-00.ldupa.mongodb.net:27017,webjtkb3-shard-00-01.ldupa.mongodb.net:27017,webjtkb3-shard-00-02.ldupa.mongodb.net:27017/?ssl=true&replicaSet=atlas-c328xs-shard-0&authSource=admin&retryWrites=true&w=majority'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
