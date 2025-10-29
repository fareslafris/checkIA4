const movies = [
  {
     title: "Inception",
    description: "Un voleur qui dérobe des secrets en entrant dans les rêves des autres.",
    image: "https://images.allocine.fr/r_760_x/medias/nmedia/18/72/34/14/19476652.jpg"
  },
  {
    title: "Interstellar",
    description: "Une équipe d'explorateurs voyage à travers un trou de ver pour sauver l'humanité.",
    image: "https://m.media-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg"
  },
  {
    title: "The Dark Knight",
    description: "Batman doit arrêter le Joker qui sème le chaos à Gotham City.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Avatar",
    description: "Un marine sur Pandora doit choisir entre son peuple et son devoir.",
    image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"
  },
  {
    title: "Titanic",
    description: "L’histoire d’amour tragique à bord du célèbre paquebot.",
    image: "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so"
  },
  {
    title: "The Matrix",
    description: "Un hacker découvre la vérité sur la réalité et la lutte contre les machines.",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "Gladiator",
    description: "Un général romain devient gladiateur pour se venger de l’empereur.",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  { title: "Jurassic Park",
    description: "Un parc rempli de dinosaures clonés devient incontrôlable.",
    image: "https://insighteditions.com/cdn/shop/products/78628-99522-cover_2048x2048.jpg?v=1636052417"
  },
  {
    title: "Forrest Gump",
    description: "Un homme simple traverse des décennies d’histoire américaine.",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    title: "The Avengers",
    description: "Les super-héros doivent unir leurs forces pour sauver la Terre.",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  {
    title: "Toy Story",
    description: "Les jouets prennent vie quand les humains ne regardent pas.",
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
    title: "Pirates of the Caribbean",
    description: "Les aventures du capitaine Jack Sparrow sur les mers.",
    image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  }
];

const movieContainer = document.getElementById('movie-container');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.classList.add('movie-card');

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-card-content">
      <h2>${movie.title}</h2>
      <p>${movie.description}</p>
    </div>
  `;

  movieContainer.appendChild(card);
});
