
const allowedOrigins = require('../config/allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {

        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        } else{
            callback(new Error('Not alowed by CORS.'));
        }
    },
    credentials: true,      //these could be coookie, http auth. its basically requests from dif dif domains
    optionsSuccessStatus: 200   //use of CORS prefligh chec
};

module.exports = corsOptions;