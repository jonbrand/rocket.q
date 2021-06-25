const Database = require("../db/config"); // seria isso? a d

module.exports = {
    async create(req, res){
        const db = await Database();
        const pass = req.body.password;
        let roomId;

        // genetate the room number
        for(var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString();
        }

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}