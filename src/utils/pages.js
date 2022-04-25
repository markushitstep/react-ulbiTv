export const getPageCount = (totalCount, limit = 10) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for( let i = 0; i < totalPages; i++){
        result.push(i + 1);
    }
    return result;
}