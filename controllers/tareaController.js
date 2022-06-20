const tareaService = require('../services/tareaService.js')

/**Data Controller */
exports.data  = (req,res) => {
  const { gstart, gend} = req.body
    tareaService.getAll(gstart,gend)
    .then((data)=>{            
        res.status(200).send({result: data})
    })
    .catch((reason)=>{
        res.status(400).send({message: reason})
    })
}

 /**Item */
 exports.item = (req,res) =>{        
    tareaService.getItem(req.params.id)
        .then((item)=>{               
            res.status(200).send({result: item})               
        })
        .catch((reason)=>{
            res.status(400).send({message: reason})
        })
}

/**Add */
exports.add = (req,res) => {
    const {gstart, gend} = req.body
    tareaService.create(req.body)
    .then((row)=>{            
        tareaService.getAll(gstart,gend)
        .then((data)=>{
            res.status(200).send({result: data})    
        })
    })
    .catch((reason)=>{
        res.status(400).send({message: reason})
    })
}

/**Delete */
exports.delete = (req,res) => {
    const { tareaId, gstart, gend} = req.body
    tareaService.delete(tareaId)
    .then((row)=>{            
        tareaService.getAll(gstart,gend)
        .then((data)=>{
            res.status(200).send({result: data})    
        })
    })
    .catch(()=>{
        res.status(400).send({message: reason})
    })
}

/**Update */
exports.update = (req,res) => {
    const {gstart, gend} = req.body
    tareaService.update(req.body,req.params.id)
    .then((row)=>{            
        tareaService.getAll(gstart,gend)
        .then((data)=>{
            res.status(200).send({result: data})    
        })
    })
    .catch(()=>{
        res.status(400).send({message: reason})
    })
}