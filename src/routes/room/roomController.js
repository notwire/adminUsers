const express = require('express');
const router = express.Router();

const roomService = require('../../services/RoomService');


router.post('/add', async (req,res)=>{
    var data = req.body;

    try {
        var room = await roomService.addRoom(data.home_id, data.name_room);
        
        res.status(201).json(room);

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/delete', async (req,res)=>{
    var data = req.body;

    try {
        var room = await roomService.deleteRoom(data.home_id, data.name_room);
        
        res.status(200).json(room);

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;