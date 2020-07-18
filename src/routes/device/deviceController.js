const express = require('express');
const router = express.Router();

const deviceService = require('../../services/DeviceService');


router.post('/add', async (req,res)=>{
    var data = req.body;
    try {
        var room = await deviceService.addDevice(data.home_id, data.name_room, data.info_device);

        res.status(201).json(room);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/delete', async (req,res)=>{
    var data = req.body;
    try {
        var room = await deviceService.deleteDevice(data.home_id, data.name_room, data.name_device);

        res.status(200).json(room);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;