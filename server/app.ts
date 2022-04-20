import express, { Router } from 'express'
import { SaveData } from './save-data'
import cors from 'cors'
import bodyParser from 'body-parser'
const saveData = new SaveData()

const app = express()

const router = Router()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


router.post('/auth', (req,res) => {

    try {
        saveData.run(req,res)
        return res.status(200).json({ message: "Insert Succesfully" })
    } catch (e) {
        return res.status(400).json({ message: `${e}` })
    }
})

app.use(router)
app.listen(4001, () => {
    console.log('RUNNING ON PORT 4001');
})