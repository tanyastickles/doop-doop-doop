export const formatMovies = (data) => {
  if (!data || Object.keys(data).length === 0 || data.total_results === 0) {
    return [];
  }

  return data.results.map((movie) => {
    return {
      id: movie.id,
      original_language: movie.original_language,
      title: formatTitle(movie.title, movie.release_date),
      poster_path: movie.poster_path,
    };
  });
};

export const formatTitle = (title, date) => {
  const year = date.substring(0, 4);
  return `${title} (${year})`;
};
