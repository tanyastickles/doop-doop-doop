import { formatMovies, formatTitle, getCast } from "../utils";
import { FORMATTED_DATA, SEARCH_MOVIES_QUERY_PRIDE_AND_PREJUDICE, NO_RESULTS_FOUND } from "../mocks/search_movie_data";
import {BEE_MOVIE_CAST_AND_CREW, BEE_MOVIE_CAST} from "../mocks/movie_cast_data";

describe("format movies", () => {
  test("formats movies after searching", () => {
    const expected = FORMATTED_DATA;

    const result = formatMovies(SEARCH_MOVIES_QUERY_PRIDE_AND_PREJUDICE);
    expect(expected).toEqual(result);
  });

  test("it returns empty array when given no results", () => {
    const result = formatMovies({});
    expect(result).toEqual([]);
  });

  test("it returns empty array with undefined input", () => {
    const result = formatMovies(undefined);
    expect(result).toEqual([]);
  })

  test("it returns empty array when no results are found", () => {
      const result = formatMovies(NO_RESULTS_FOUND);
      expect(result).toEqual([]);
  })
});

describe('format title', () => {
  test("it formats title", () => {
    const title = "Goldie Cakes";
    const date = "2045-09-01";
  
    const result = formatTitle(title, date);
    const expected = "Goldie Cakes (2045)";
  
    expect(result).toEqual(expected);
  });
});

test('getCast returns a list of all actors in a movie', () => {
  const results = getCast(BEE_MOVIE_CAST_AND_CREW.cast);
  expect(results).toEqual(BEE_MOVIE_CAST);
});



