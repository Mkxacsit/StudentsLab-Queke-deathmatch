const express = require('express');
const swaggerUi = require('swagger-ui-express');

const app = express();
const passport = require('./src/passport');


const userRouter = require('./src/routers/userRouter');
const authRouter = require('./src/routers/authRouter');
const sessionRouter = require('./src/routers/sessionRouter');
const locationRouter = require('./src/routers/locationRouter');

const httpLog = require('./src/middlewares/httpLog');

const swaggerFile = require('./src/swagger/output.json');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


app.use(httpLog);

app.use('/user', userRouter);
app.use('/location',locationRouter);
app.use('/session',sessionRouter);
app.use('/', authRouter);

app.use('/api-doc',swaggerUi.serve, swaggerUi.setup(swaggerFile));



function startServer() {
    try {
        app.listen(3033, () => {
            console.log('server: start listening');
        });
    }
    catch(error) {
        console.log(error);
    }
}

startServer();





 
