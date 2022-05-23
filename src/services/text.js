function slicedDescription(description) {
    if (description.length >= 100) {
        const result = `${description.slice(0, 100)}...`;
        return result;
    }
    return description;
}

const textServices = {
    slicedDescription,
};

export default textServices;
