import Express from "express"

const app = Express()

app.get("/teste", (req, res) => {

    return res.json({ "hello": "world" })

})
app.listen(3000, () => {
    console.log('aoba')
})
