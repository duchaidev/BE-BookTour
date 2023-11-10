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

var whitelist = ["http://139.162.7.93", "http://duchai.id.vn"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
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
