export type Character = {
    name: string,
    height: string, //Number
    mass: string, //Number
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,//Url
    films: string[],//Urls
    species: string[],//Urls
    vehicles: string[],//Urls
    starships: string[],//Url
    created: string, //Date
    edited: string, // Date
    url: string; //Url (using as ID)
};
