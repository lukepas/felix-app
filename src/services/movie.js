function isMovieFavorite(list, movieId) {
    const result = list.find((id) => id === movieId);
    return result;
}

const movieServices = {
    isMovieFavorite,
};

export default movieServices;
