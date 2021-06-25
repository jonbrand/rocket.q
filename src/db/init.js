const Database = require("./config");

// start database
const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`
            CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )
        `);

        await db.exec(`
                CREATE TABLE questions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    titulo TEXT,
                    read INT
                )
        `);

        await db.close();
    } // no roomcontroler.js ta acusando o erro de await  lzzz
}

initDb.init();