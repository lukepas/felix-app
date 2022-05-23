async function getAll(authToken) {
    const response = await fetch('https://academy-video-api.herokuapp.com/content/items', { token: authToken });
    return response;
}

async function getById(id, authToken) {
    const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${id}`, { token: authToken });
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
