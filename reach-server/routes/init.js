const express = require('express')

const app = express();

// app.get('/ocp/login', (req, res) => {
//     console.log(req);
// })

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use("/ocp/category", require("./api/category"));
app.use("/ocp/login", require("./api/login"));
app.use("/ocp/interface", require("./api/power-interface"));
app.use("/ocp/businessuser", require("./api/power-user"));
app.use("/ocp/team", require("./api/power-team"));
app.use("/ocp/bindUser", require("./api/bindUser"));
app.use("/ocp/powerList", require("./api/powerList"));
app.use("/ocp/business", require("./api/business"));
app.use("/ocp/event", require("./api/eventList"));
app.use("/ocp/components", require("./api/components"));
app.use("/ocp/head", require("./api/head"));


app.listen(9527, () => {
    console.log('9527 listening');
})