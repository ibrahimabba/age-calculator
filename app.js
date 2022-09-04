import express from "express";
import rateLimiter from "./src/middlewares/rateLimitter.js";
import howoldRoute from "./src/routes/howOldRoute.js";

const app = express()

app.get('/', rateLimiter, (_req, res) => {
    res.send('Welcome')
})

app.use('/', rateLimiter, howoldRoute)

// error handler
app.use(function (err, _req, res, _next) {
    if (err.httpStatusCode) {
        res.status(err.httpStatusCode)
            .json({
                success: false,
                message: err.message || 'Something went wrong, it\`ll be nice if you report this to us.',
                status: err.httpStatusCode,
                data: err.data || {}
            });
    } else {
        res.status(500)
            .json({
                success: false,
                message: 'Something went wrong, it\`ll be nice if you report this to us.',
                status: 500,
                data: {}
            });
    }
});

export default app