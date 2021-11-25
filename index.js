app.get('/rechner/:operator', (req,res) => {
    const { x, y } = req.body
    const { operator } = req.params
    var answer = null
    if (operator == "addition") {
        answer = x+y
    }
    else if (operator == "subtraktion"){
        answer = x-y
    }
    else if (operator == "multiplikation"){
        answer = x*y
    }
    else if (operator == "division"){
        answer = x/y
    }
    else if (operator == "root"){
        answer = Math.pow(x, 1/y)
    }
    res.status(200).send({
        answer: answer,
        operator: operator
    });
});

const express = require('express');
const app = express();

const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT
)

app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large',
    });
});


app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
       tshirt: `👕 with your ${logo} and ID of ${id}`,
    });

});
