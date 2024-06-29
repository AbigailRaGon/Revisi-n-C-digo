const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // llamamos la clase, añadimos el punto
const $b = document.querySelector('.blog'); // llamamos la clase, añadimos el punto
const $l = document.querySelector('.location');


//Un await no puede existir sin su async
async function  displayUser(username){
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //JSON faltaba para obtener el objeto
  console.log(data);
  $n.textContent = `${data.name}`; //Se reemplazo ' por ` backtick
  $b.textContent = `${data.blog}`; //Se reemplazo ' por ` backtick
  $l.textContent = `${data.location}`; //Se reemplazo ' por ` backtick
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // añadimos signo de $ a la n
}

displayUser('stolinski').catch(handleError);