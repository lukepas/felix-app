import localStorageItems from '../constants/localStorageItems';

function isLoggedIn() {
    const token = localStorage.getItem(localStorageItems.authToken);
    if (!token || token === '') return false;
    return true;
}

const userServices = {
    isLoggedIn,
};

export default userServices;
