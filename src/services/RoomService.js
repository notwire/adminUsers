const HomeModel = require('../db/mongo/Models/Home');

class RoomService {
    async addRoom(home_id, name_room){
        try {
            const response = await HomeModel.createRoom(home_id, name_room);

            return {
                status : "created",
                response : response
            }

        } catch (error) {
            throw {
                status : "error db"
            }
        }
    }

    async deleteRoom(home_id, name_room){
        try {
            const response = await HomeModel.deleteRoom(home_id, name_room);

            return {
                status : "deleted",
                response : response
            }

        } catch (error) {
            throw {
                status : "error db"
            }
        }
    }
}

module.exports = new RoomService();