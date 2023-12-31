export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c9f21efee4msh0fff399ea0beed5p1d0873jsn84f788779c43',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}