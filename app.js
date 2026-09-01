let personajes = [];

if (personajes.length > 0) {
    console.log('Datos cargados desde memoria');
    mostrarPersonajes(personajes);
    return;
}

fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
    .then((Response) => Response.json())
    .then((data) => {
        console.log('Datos desde API:', data);

        personajes - data;
        mostramosPersonajes(personajes);
        })

    .catch(errror => console.error('Error:', error));




