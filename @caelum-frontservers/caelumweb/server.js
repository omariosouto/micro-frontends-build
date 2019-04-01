const path = require('path')
const express = require('express')

const app = express()

const baseDir = (project) => path.resolve(__dirname, '..', '..', '@caelum-frontprojects', project, 'build')

const routes = [
    {
        projectFolderName: 'login',
        routePath: '/',
    },
]

routes.forEach((route) => {
    const routePath = route.routePath.replace('/', '')
    const projectFolderName = route.projectFolderName
    const pathToProjectBuild = baseDir(projectFolderName)

    app.use(`/${routePath}`, express.static(pathToProjectBuild))
    app.get(`/${routePath}`, (req,res) => {
        res.sendFile('index.html' , { root : pathToProjectBuild })
    })        
})


const port = 3000
app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))
