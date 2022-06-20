module.exports = app =>{
    const tareaController = require('../controllers/tareaController.js');
    var router = require("express").Router();
    router.post('/lista',tareaController.data);
    router.post('/',tareaController.add);
    router.get('/:id',tareaController.item);
    router.put('/:id',tareaController.update);
    router.post('/delete/lista',tareaController.delete);
    app.use('/api/tareas',router);
}