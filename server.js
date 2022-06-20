const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const logger = require("morgan");

/**Origen de Consulta */
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(logger('dev'));

app.use(express.urlencoded({extended : true}));
app.get("/",(req, res)=>{
    res.json({message: "Bienvenido API TASK"});
});
require('./routes/tareaRoutes')(app);

const PORT = process.env.PORT || 4001;
app.listen(PORT,()=>{
    console.log(`Server up !! en puerto ${PORT}.`);
});



