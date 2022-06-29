const express = require("express");
const Razorpay = require("razorpay");
const app = express();
app.use(express.static("./public"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hi");
// });

app.post("/order", async (req, res) => {
  const amount = req.body.amount;

  var instance = new Razorpay({
    key_id: "rzp_test_DfhbmLCnKJDWxO",
    key_secret: "YFZxjAWfyFyJidZXbXLu2UN0",
    // this needs to go in .env
  });

  var options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  //   instance.orders.create(options, function (err, order) {
  //     console.log(order);
  //   });

  const myOrder = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    amount,
    order: myOrder,
  });
});

app.listen(4000, () => console.log(`Server is running at port 4000`));
