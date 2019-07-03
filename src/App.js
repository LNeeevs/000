import { teste, fruta } from './Test';

const car = require('./Classe');
const promet = require('./Prom');

const carro1 = new car.Carro('Fiat Uno');
carro1.show();

promet.prometheus
  .then(data => console.log(data))
  .catch(err => console.error(err));

const hello = 'Hello World';

console.log(`${hello}`);

console.log(teste, fruta);
