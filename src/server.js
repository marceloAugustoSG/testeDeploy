import Express from "express"
import { prisma } from '../src/PrismaClient.js'

const app = Express()

app.get("/users", async (res) => {
    const user = await prisma.user.findMany()
    return res.status(200).json(user)

})
app.listen(() => {

    host: '0.0.0.0',
    console.log("server is running port ")
})
