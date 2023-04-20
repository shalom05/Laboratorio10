const contenedor_recommended = document.getElementById("moviescontainer")
const contenedor_trending = document.getElementById("moviescontainer2")
const bannerTittle = document.getElementById("bannerTittle")
const bannerRatings = document.getElementById("bannerRatings")
const bannerDescription = document.getElementById("bannerDescription")
const bannerClasification = document.getElementById("bannerClasification")
const bannerImage2 = document.getElementById("header")


const movie1 = new Movie("./images/sweettooth.jpg","./imgbanner/sweetTooth.jpg","Sweet Tooth",5,"Un niño adorable, mitad humano y mitad ciervo, sale en busca de su familia y un hogar con un arisco protector como compañía en un mundo posapocalíptico. Ve todo lo que quieras.", "10+" )
const movie2 = new Movie("./images/IMG_1339-612x900.png","./imgbanner/Dahmer.jpg","Dahmer",4,"La historia de uno de los asesinos en serie más conocidos de Estados Unidos, contada desde los puntos de vista de sus víctimas", "18+")
const movie3 = new Movie("./images/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg","./imgbanner/Shadow-and-Bone-Netflix.jpg","Shadow and Bone",3,"Fuerzas siniestras conspiran contra una joven soldado después de que ella revela un poder mágico que puede unir su mundo.","18+")
const movie4 = new Movie("./images/gjbj1of8rr691.webp","./imgbanner/sandman-k4HI-U1701121447502Pa-1248x770@RC.jpg","Sandman",5,"Cuando Sandman, el ser cósmico que controla los sueños, es capturado y mantenido prisionero durante más de un siglo, debe viajar a través de diferentes mundos y líneas de tiempo para arreglar el caos que ha causado su ausencia.", "18+")
const movie5 = new Movie("./images/1030796-Stranger-Things-poster-Netflix-midnight-advertising-screenshot-musical-theatre-album-cover.jpg","./imgbanner/Stranger-Things.jpeg","Stranger Things",5,"Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.","18+")
const movie6 = new Movie("./images/the witcher.jpg","./imgbanner/witcher.jpg","Witcher",3,"El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.", "18+")
const movie7 = new Movie("./images/YOU.jpg","./imgbanner/you.jpg","You",4,"Un hombre encantador y muy peligroso toma medidas extremas para introducirse en la vida de las mujeres de las que se enamora.","18+")
const movie8 = new Movie("./images/squidgame.jpg","./imgbanner/squidgame.jpg","Esquid Game",5,"Cientos de personas con dificultades económicas aceptan una extraña invitación a un juego de supervivencia. Les espera un premio millonario, pero hay mucho en juego.","18+")
const movie9 = new Movie("./images/midnight.jpg.crdownload","./imgbanner/midnigth.jpg","Mid Nigth",3,"Un lanzador espacial atraviesa mundos dispares y explora preguntas existenciales sobre la vida, la muerte y todo lo demás.","18+")

const listmovies = [movie1, movie2, movie3, movie4, movie5,movie6,movie7,movie8,movie9]

for (let i = 0; i < listmovies.length; i++) {
    var movie = listmovies[i]
    contenedor_recommended.innerHTML += movie.toHTML_recommended(i)
    contenedor_trending.innerHTML += movie.toHTML_trending(i)
}

function selectedMovie(id) {
    var movie = listmovies[id]
    movie.toBanner()
}



