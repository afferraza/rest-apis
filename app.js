var createError = require('http-errors')
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var indexRouter = require('./routes/index')

var app = express()
var port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', indexRouter)

app.use(function(req, res, next) {
    next(createError(405))
})
    // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.status(err.status).json({
        message: err.message
    })
})

//docker build -t rest-api .
//docker run -d -p 3001:3000 rest-api