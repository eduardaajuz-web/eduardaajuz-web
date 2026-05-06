const series = [
    {
        nome: "Breaking Bad" ,
        Ano:2008 ,
        Gênero: "Drama/Crime " ,
        Classificação: 16 ,
        Temporadas: 5, 
        Episódios: 62, 
    },
    {
        nome: "Game of Thrones" ,
        Ano:2011,
        Gênero: "Fantasia/Drama " ,
        Classificação: 18 ,
        Temporadas: 8, 
        Episódios: 73, 

    },
    {
        nome: "The Sopranos" ,
        Ano:1999 ,
        Gênero: "Drama/Crime " ,
        Classificação: 18 ,
        Temporadas: 6, 
        Episódios: 86, 

    },
    {
        nome: "Succession" ,
        Ano:2018 ,
        Gênero: "Drama " ,
        Classificação: 16,
        Temporadas: 4,
        Episódios: 39, 


    }, 
    {
        nome: "The Wire" ,
        Ano: 2002 ,
        Gênero: "Drama/Policial " ,
        Classificação: 18 ,
        Temporadas: 5, 
        Episódios: 60, 
    }, 
    {
        nome: "Friends" ,
        Ano: 1994 ,
        Gênero: "Comédia/Sitcom " ,
        Classificação: 12 ,
        Temporadas: 10, 
        Episódios: 236,
    },
    {
        nome: "Stranger Things" ,
        Ano:  2016 ,
        Gênero: "Sci-Fi/Terror " ,
        Classificação: 16 ,
        Temporadas: 5, 
        Episódios: 42,
    },
    {
        nome: "Chernobyl" ,
        Ano:  2019 ,
        Gênero: "Drama/História " ,
        Classificação: 16 ,
        Temporadas: 1, 
        Episódios: 5,
    },
    {
        nome: "The Office " ,
        Ano:  2005 ,
        Gênero: "Comédia/Sitcom " ,
        Classificação: 14 ,
        Temporadas: 9, 
        Episódios: 201,
    },
    {
        nome: "The Last of Us " ,
        Ano:  2023 ,
        Gênero: "Drama/Sci-Fi" ,
        Classificação: 18,
        Temporadas: 2, 
        Episódios: 16,
    },
]

// Criar o JSON:
const seriesJSON = JSON.stringify(series)
console.log(seriesJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("series.json", seriesJSON)

// Ler o arquivo
const seriesArquivo = require("./series.json")
console.log(seriesArquivo)

    
