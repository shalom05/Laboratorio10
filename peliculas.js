class Movie {
    constructor(movieimg,movieimg2,name,ratings,description,clasification) {
        this.movieimg = movieimg
        this.movieimg2 = movieimg2
        this.name = name
        this.ratings = ratings
        this.description = description
        this.clasification = clasification

    }
    


    toHTML_recommended(id) {
        if (this.ratings === 3) {
            return `
            <div class="case-movie" id "${id}" onclick = "selectedMovie(${id})">
                <div class="img-carrusel">
                    <img src="${this.movieimg}" alt="">
                </div>
                <div class="img-info">
                    <p>Ratings:</p>
                    <div class="stars">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_outline_star.png" alt="">
                        <img src="./images/yellow_outline_star.png" alt="">
                        <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                    </div>
                </div>
            </div>
            `
        } else if (this.ratings === 4) {
            return `
                <div class="case-movie" id "${id}" onclick = "selectedMovie(${id})">
                    <div class="img-carrusel">
                        <img src="${this.movieimg}" alt="">
                    </div>
                    <div class="img-info">
                        <p>Ratings:</p>
                        <div class="stars">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_outline_star.png" alt="">
                            <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                        </div>
                    </div>
                </div>
                `
        } else if (this.ratings === 5) {
            return `
                <div class="case-movie" id "${id}" onclick = "selectedMovie(${id})">
                    <div class="img-carrusel">
                        <img src="${this.movieimg}" alt="">
                    </div>
                    <div class="img-info">
                        <p>Ratings:</p>
                        <div class="stars">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                        </div>
                    </div>
                </div>
            `
        }
        
    }

    toHTML_trending(id) {
        return  `
        <div class="case-movie" id="${id}" onclick="selectedMovie(${id})">
            <div class="img-carrusel-2">
                <img src="${this.movieimg}" alt="">
            </div>
        </div>`
    }

    toBanner() {
        bannerTittle.innerHTML = this.name
        bannerRatings.innerHTML = `(${this.ratings} ratings)`
        bannerDescription.innerHTML = this.description
        bannerClasification.innerHTML = this.clasification
        bannerImage2.style.backgroundImage=`url(${this.movieimg2})`

    }
    
}

