const Database = require("../db/config"); // seria isso? a d

module.exports = {
    async create(req, res){
        const db = await Database();
        const pass = req.body.password;
        let roomId;
        let isRoom = true;

        while(isRoom) {
            // genetate the room number
            for(var i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString();
            }

            // check if the number already exists
            const roomsExistIds = await db.all(`SELECT id FROM rooms`);
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);

            if(!isRoom) {
                // insertion of the room in database
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }

        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },
    // render screen
    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;

        // select questions in the database
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);

        // select questions read in the database
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

        // check for questions
        let isNoQuestions

        if(questions.length == 0) {
            if(questionsRead.length == 0) {
                isNoQuestions = true;
            }
        }
        
        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions});
    },

    enter (req, res) {
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    }
}