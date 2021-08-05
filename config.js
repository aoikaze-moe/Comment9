module.exports = {
    port: process.env.PORT || 3000,
    mongodb: {
        username: process.env.MONGO_USERNAME || null,
        password: process.env.MONGO_PASSWORD || null,
        host: process.env.MONGO_HOST || '127.0.0.1',
        port: process.env.MONGO_PORT || '27017',
        database: process.env.MONGO_DATABASE || 'Comment9',
    },
    redis: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || '6379',
        password: process.env.REDIS_PASSWORD || null,
    },
    session: {
        cookieSecrect: 'Danmaku',
    },
    danmaku: {
        expire: 5,
        historySize: 10,
        senders: ["danmaku"],
        filters: ["default","blacklist"],
    },
    host: 'http://localhost:3000',
    rootPath: '/comment'
};
