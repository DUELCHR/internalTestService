
"use strict";

const cds = require("@sap/cds");
const xsenv = require("@sap/xsenv");
const passport = require('passport');
const JWTStrategy = require('@sap/xssec').JWTStrategy;

cds.on("bootstrap", app => {    
    //load Envoirment
    xsenv.loadEnv();
    if (process.env.NODE_ENV !== "test") {
        passport.use(new JWTStrategy(xsenv.getServices({ xsuaa: { tag: 'xsuaa' } }).xsuaa));
        app.use(passport.initialize());
        app.use(passport.authenticate('JWT', { session: false }));
    };
});

module.exports = cds.server;