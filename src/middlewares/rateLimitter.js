import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 1 * 1000, // 1 seconds
    max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
export default limiter

// import moment from 'moment';
// import { RequestLimitError } from '../helpers/errors.js';

// const WINDOW_SIZE_IN_SECONDS = 100;
// const MAX_REQUEST_PER_WINDOW = 3;

// const userRequestRecords = {}


// export const rateLimiter = (req, _res, next) => {
//     try {
//         // get current user's record
//         const record = userRequestRecords[req.ip];
//         const currentRequestTime = moment();

//         //  if no record is found, create one and save in memory
//         if (record == null) {
//             userRequestRecords[req.ip] = {
//                 requestTimeStamp: currentRequestTime.unix(),
//                 requestCount: 1,
//             };
//             next();
//         }
//         // if record is found, calculate window difference by subtracting window size from the current time
//         let windowStartTimestamp = moment().subtract(WINDOW_SIZE_IN_SECONDS, 'seconds').unix();

//         // if last request is still within the window
//         if (record.requestTimeStamp > windowStartTimestamp) {
//             if (record.requestCount < MAX_REQUEST_PER_WINDOW) {
//                 userRequestRecords[req.ip] = {
//                     ...record,
//                     requestCount: record.requestCount + 1
//                 };
//                 // if last request is still within the window but the number of request is greater than the time limit, throw an error
//             } else {
//                 throw new RequestLimitError(`You have exceeded the ${MAX_REQUEST_PER_WINDOW} requests limit in ${WINDOW_SIZE_IN_SECONDS} seconds limit!`)
//             }

//             next()
//             // if last request is not within the window, reset everything
//         } else {
//             userRequestRecords[req.ip] = {
//                 requestTimeStamp: currentRequestTime.unix(),
//                 requestCount: 1,
//             };
//             next();
//         }
//     } catch (error) {
//         next(error);
//     }
// };