const sqlite3 = require("sqlite3");

// opening connection to the database
const { open } = require("sqlite");

// database configuration
module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })

