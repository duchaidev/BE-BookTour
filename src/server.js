const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const tourRoute = require("./routes/tourRoute.js");
const bookingRoute = require("./routes/bookingRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const postRoute = require("./routes/postRoute.js");
const contactRoute = require("./routes/contactRoute.js");
const cors = require("cors");

const app = express();
dotenv.config();
const port = process.env.PORT || 6969;
connectDB();

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

const allowedOrigins = [process.env.URL_REACT, process.env.DOMAINS];

app.use(
  cors({
    origin: (origin, callback) => {
      const isAllowed = !origin || allowedOrigins.includes(origin);
      const allowedOrigin = isAllowed ? origin : allowedOrigins[0];
      callback(null, allowedOrigin);
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/api/v1/tour", tourRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/contact", contactRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
