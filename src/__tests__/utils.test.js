import { formatMovies, formatTitle } from "../utils";
import { SEARCH_MOVIES_QUERY_PRIDE_AND_PREJUDICE, NO_RESULTS_FOUND } from "../mocks/search_movie_data";

describe("format movies", () => {
  test("formats movies after searching", () => {
    const expected = [
      {
        original_language: "en",
        title: "Pride & Prejudice (2005)",
        poster_path: "/sZEXhhnEKh9hjzoiIi9XgHGqtYm.jpg",
      },
      {
        original_language: "en",
        title: "Pride and Prejudice and Zombies (2016)",
        poster_path: "/jsJlOhVHiz1xXr36616EI8tJ4b2.jpg",
      },
    ];

    const result = formatMovies(SEARCH_MOVIES_QUERY_PRIDE_AND_PREJUDICE);
    expect(expected).toEqual(result);
  });

  test("it returns empty array when given no results", () => {
    const result = formatMovies({});
    expect(result).toEqual([]);
  });

  test("it returns empty array when no results are found", () => {
      const result = formatMovies(NO_RESULTS_FOUND);
      expect(result).toEqual([]);
  })
});

test("format title", () => {
  const title = "Goldie Cakes";
  const date = "2045-09-01";

  const result = formatTitle(title, date);
  const expected = "Goldie Cakes (2045)";

  expect(result).toEqual(expected);
});
