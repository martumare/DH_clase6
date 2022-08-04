const peliculas = require("./movies.js");

let moviesDH = {
    peliculas: peliculas,

    listMovies: function(){
        console.log("")
        console.log("-------------------------------------")
        console.log("     > Cartelera de peliculas <   ")
        console.log("-------------------------------------")
        peliculas.forEach(function(pelicula, index){
            console.log((index + 1) + " - " + pelicula.title)
        })
        console.log("-------------------------------------")
    },

    searchMovie: function(id){
        let movie = peliculas.find(movie => movie.id === id);
        if (movie == undefined) {
            return null
        } else {
            return movie
        }

    },

    searchMoviesByGenre: function(genero){
        return peliculas.filter(movie => {
            if (movie.genre == genero){
                return movie.title;
            }else if (genero == undefined){
                return null;
            }
        })
    },

    totalPrice: function(){
        arrayDePelis = [];
        peliculas.forEach(function(precio){
            arrayDePelis.push(precio.price);
        });
        let compra = arrayDePelis.reduce(function(suma, precio){
            return suma + precio;
        });
        return compra;
    },

    changeMovieGenre: function(id, newGenre){
        const peliculaEncontrada = this.searchMovie(id);
        peliculaEncontrada.genre = newGenre;
        return "El genero de " + peliculaEncontrada.title + " fue cambiado por: " + newGenre
    }

}


//console.log(moviesDH.peliculas)
//moviesDH.listMovies()
//console.log(moviesDH.searchMovie())
//console.log(moviesDH.searchMoviesByGenre("Animacion"))
//console.log(moviesDH.totalPrice())
//console.log(moviesDH.changeMovieGenre(3, "Accion"))
