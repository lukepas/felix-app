async function getAll() {
    const response = await fetch('https://academy-video-api.herokuapp.com/content/items');
    return response;
}

async function getById(id) {
    const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${id}`);
    return response;
}

async function loginUser(data) {
    const response = await fetch('https://academy-video-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response;
}

const movieRepository = {
    getAll,
    getById,
    loginUser,
};

export default movieRepository;
