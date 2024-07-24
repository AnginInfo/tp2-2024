
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

function soma(n1, n2) { return n1 + n2; }
function subtracao(n1, n2) { return n1 - n2; }
function multiplicacao(n1, n2) { return n1 * n2; }
function divisao(n1, n2) { return n1 / n2; }
function fatorial(n) {
    if (n == 0) return 1;
    let resp = n;
    while (n > 2) {
        resp *= --n;
    }
    return resp;
}

app.get("/", (req, res) => {
    res.render("conta");
});

app.post("/soma", (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = soma(n1, n2);
    res.render("conta", { conta: result });
});

app.post("/subtracao", (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = subtracao(n1, n2);
    res.render("conta", { conta: result });
});

app.post("/multiplicacao", (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = multiplicacao(n1, n2);
    res.render("conta", { conta: result });
});

app.post("/divisao", (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = divisao(n1, n2);
    res.render("conta", { conta: result });
});

app.post("/fatorial", (req, res) => {
    const n1 = parseInt(req.body.n1);
    const result = fatorial(n1);
    res.render("conta", { conta: result });
});

app.listen(8080, () => {
    console.log("Servidor funcionando na porta 8080...");
});
