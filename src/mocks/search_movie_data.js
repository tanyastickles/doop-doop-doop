// https://api.themoviedb.org/3/search/movie?api_key=b9f2ba66bf106f55ce0ad6f39742206b&language=en-US&query=Pride%20And%20Prejudice&page=1&include_adult=false
export const SEARCH_MOVIES_QUERY_PRIDE_AND_PREJUDICE = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/yBq4jWZLaEJIssuVx2fAysEwJnt.jpg",
      genre_ids: [18, 10749],
      id: 4348,
      original_language: "en",
      original_title: "Pride & Prejudice",
      overview:
        "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
      popularity: 42.24,
      poster_path: "/sZEXhhnEKh9hjzoiIi9XgHGqtYm.jpg",
      release_date: "2005-09-16",
      title: "Pride & Prejudice",
      video: false,
      vote_average: 8.1,
      vote_count: 5448,
    },
    {
      adult: false,
      backdrop_path: "/1HdBV5te8Hjj093JlnX4kmZBOqN.jpg",
      genre_ids: [10749, 27, 35, 53],
      id: 58431,
      original_language: "en",
      original_title: "Pride and Prejudice and Zombies",
      overview:
        "A zombie outbreak has fallen upon the land in this reimagining of Jane Austen's classic tale of the tangled relationships between lovers from different social classes in 19th century England. Feisty heroine Elizabeth Bennet is a master of martial arts and weaponry and the handsome Mr. Darcy is a fierce zombie killer, yet the epitome of upper class prejudice. As the zombie outbreak intensifies, they must swallow their pride and join forces on the blood-soaked battlefield in order to conquer the undead once and for all.",
      popularity: 27.164,
      poster_path: "/jsJlOhVHiz1xXr36616EI8tJ4b2.jpg",
      release_date: "2016-02-04",
      title: "Pride and Prejudice and Zombies",
      video: false,
      vote_average: 6,
      vote_count: 1612,
    },
  ],
  total_pages: 1,
  total_results: 2,
};

export const NO_RESULTS_FOUND = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};
