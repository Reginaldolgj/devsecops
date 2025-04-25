const express = require('express')

const app = express()

const port = 3000

app.get("/", (request, response) => {
  return response.send({ message: "Olá mundo!" });
});


app.listen(port, () => {

    console.log(`Servidor na 🚪: ${port}`)
})

