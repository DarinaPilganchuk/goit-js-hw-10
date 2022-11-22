
// const BASE_URL = 'https://restcountries.com/v2';

export function fetchCountries(name ='Ukrain') {
  console.log(name)
  return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
  .then(resp =>{
    if (!resp.ok) {
      throw new Error(resp.statusText);
      
  }
   return resp.json();
   
 })
 
 .catch(err => console.log(err));



// console.log(fetchCountries)
// export function fetchCountries(name = 'Ukraine') {
//   console.log(name);
//   return fetch(
//     `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
//   )
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .catch(err => console.log(err));
}
