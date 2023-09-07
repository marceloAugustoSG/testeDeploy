import Express from "express"
import { prisma } from '../src/PrismaClient.js'

const app = Express()

app.get("/users", async (req, res) => {
    const user = await prisma.user.findMany()

    return res.status(200).json(user)

})
app.listen(3000, () => {

    console.log("server is running port ")
})
