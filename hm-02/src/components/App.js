import React, { Component } from "react";
import { Filmovi } from "./Filmovi";
import { Movies } from './Movies'


let omileniFilmovi = [
  {
    name: "The Dark Knight (2008)",
    date: "07/08/2008",
    genre: "Action/Crime/Drama/Thriller",
    plot: 'A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance.',
    imdbUrl: 'https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=Q5R7B7KWXRKK1BTZXNSN&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg'

  },
  {
    name: "The Game",
    date: "09/12/1997",
    genre: "Drama/Mistery/Thriller",
    plot: 'It tells the story of a wealthy investment banker who is given a mysterious gift by his brother—participation in a game that integrates in strange ways with his everyday life. As the lines between the banker`s real life and the game become more uncertain.',
    imdbUrl: "https://www.imdb.com/title/tt0119174/?ref_=nv_sr_srsg_0",
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg'

  },
  {
    name: "Taxi Driver",
    date: "02/09/1976",
    genre: "Crime/Drama",
    plot: 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.',
    imdbUrl: 'https://www.imdb.com/title/tt0075314/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=2K7SMA25GHEBB5PRZD2G&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_111',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
  },
  {
    name: "Goodfellas",
    date: "09/21/1990",
    genre: "Crime/Darama",
    plot: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    imdbUrl: 'https://www.imdb.com/title/tt0099685/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=2K7SMA25GHEBB5PRZD2G&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_17',
    imgUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    name: "The Godfather(Part 2)",
    date: "12/18/1974",
    genre: "Crime/Drama",
    plot: 'The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas.',
    imdbUrl: 'https://www.imdb.com/title/tt0071562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=2K7SMA25GHEBB5PRZD2G&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3',
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
]


let favMovies = [
  {
    name: "Iron Man",
    date: "05/02/2008",
    genre: "Sci-Fi/Action/Adventure",
    plot: "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines.",
    imdbUrl: "https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1",
    imgUrl: "https://m.media-amazon.com/images/I/41L55o1W3JL._AC_.jpg"
  },
  {
    name: "Spider-Man",
    date: "05/03/2002",
    genre: "Sci-Fi/Adventure/Crime",
    plot: "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson.",
    imdbUrl: "https://www.imdb.com/title/tt0145487/",
    imgUrl: "https://m.media-amazon.com/images/I/51kzFX8Zr8L._AC_.jpg"
  },
  {
    name: "The Incredible Hulk",
    date: "06/13/2008",
    genre: "Action/Adventure",
    plot: "Depicting the events after the Gamma Bomb. 'The Incredible Hulk' tells the story of Dr Bruce Banner, who seeks a cure to his unique condition, which causes him to turn into a giant green monster under emotional stress.",
    imdbUrl: "https://www.imdb.com/title/tt0800080/?ref_=nv_sr_srsg_0 ",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg"
  },
  {
    name: "The Avengers",
    date: "05/04/2012",
    genre: "Action/Adventure/Sci-Fi",
    plot: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D.",
    imdbUrl: "https://www.imdb.com/title/tt0848228/",
    imgUrl: "https://cps-static.rovicorp.com/2/Open/iN_DEMAND/Program/26652161/_derived_jpg_q90_310x470_m0/The_Avengers_pa1_6_1594107165090_0.jpg"
  },
  {
    name: "Inglourious Basterds",
    date: "08/21/2009",
    genre: "Action/Drama/War",
    plot: "In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick ",
    imdbUrl: "https://www.imdb.com/title/tt0361748/?ref_=nv_sr_srsg_0",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg"
  }
]

export function App() {
  return (
    <div>


      <Filmovi omileniFilmovi={omileniFilmovi} />
      <hr style={{ height: "5px" }} />
      <Movies favMovies={favMovies} />
    </div>
  )
}