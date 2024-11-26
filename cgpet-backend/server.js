import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'


const app = express()
const prisma = new PrismaClient()


// Configuração do middleware CORS
app.use(cors({
    origin: 'http://localhost:5173', // Endereço do front-end
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Headers permitidos
}));
app.use(express.json())

//Rotas
app.post('/contatos', async (req, res) => {

    await prisma.ong.create({
        data: {
            ong: req.body.ong,
            servicos: req.body.servicos,
            localizacao: req.body.localizacao,
            link: req.body.link,
            tags: req.body.tags
        }
    })

    res.status(201).json(req.body)

})

app.get('/contatos', async (req, res) => {

    const ongs = await prisma.ong.findMany()

    res.status(200).json(ongs)
})

app.put('/contatos/:id', async (req, res) => {

    await prisma.ong.update({
        where: {
            id: req.params.id
        },

        data: {
            ong: req.body.ong,
            servicos: req.body.servicos,
            localizacao: req.body.localizacao,
            link: req.body.link,
            tags: req.body.tags
        }
    })

    res.status(201).json({ message: 'ONG atualizada com sucesso!'})
    
})

app.delete('/contatos/:id', async (req, res) => {

    await prisma.ong.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "ONG deletada com sucesso!" })
})

app.listen(3000)
