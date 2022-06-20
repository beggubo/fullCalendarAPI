const db = require("../models");
const Op = db.Sequelize.Op;

const {Tarea} = db;

/**Item */
exports.getItem = (pky) =>{
    return new Promise((resolve,reject)=>{
        Tarea.findByPk(pky,{
            raw:true,
            nest:true
        })
        .then((row)=>{
            resolve(row)
        })
        .catch((reason)=>{reject({message: reason.message})})
    })
}
/**Data */
exports.getAll = (start,end)=>{
    return new Promise((resolve,reject)=>{
        Tarea.findAll({
            raw:true,
            nest:true,
            order:[['start','DESC']],
            where:{start:{[Op.between]: [start,end]}}
        })
        .then((rows)=>{
            resolve(rows)
        })
        .catch((reason)=>{reject({message: reason.message})})
    })

}

/**Add */
exports.create = (task) =>{
    return new Promise((resolve,reject)=>{
      Tarea.create(task)  
        .then((row)=>{
           resolve({message: "succes"}) 
        })
        .catch((reason)=>{
            reject({message: reason.message})
        })
    })
}

/**Update */
exports.update = (task, taskId) =>{
    return new Promise((resolve,reject)=>{
      Tarea.update(task,{
          where:{
              id:Number(taskId)
          }
      })  
        .then((row)=>{
           resolve({message: "succes"}) 
        })
        .catch((reason)=>{
            reject({message: reason.message})
        })
    })
}
/**Delete */
exports.delete = (taskId) =>{
    return new Promise((resolve,reject)=>{
      Tarea.destroy({
          where:{
              id: Number(taskId)
          }
      })
        .then((row)=>{
           resolve({message: "succes"}) 
        })
        .catch((reason)=>{
            reject({message: reason.message})
        })
    })
}