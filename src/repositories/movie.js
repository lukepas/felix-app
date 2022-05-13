async function getAll() {
    const response = await fetch('https://academy-video-api.herokuapp.com/content/items');
    return response;
}

async function getById(id) {
    const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${id}`);
    return response;
}

const movieRepository = {
    getAll,
    getById,
};

export default movieRepository;
