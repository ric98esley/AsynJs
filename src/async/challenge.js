const fechtData = require('../Utils/fetchData');
const fetchData = require('../Utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFuntion = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fechtData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch {
        console.error(error)
    }
}

console.log('before');
anotherFuntion(API);
console.log('after');