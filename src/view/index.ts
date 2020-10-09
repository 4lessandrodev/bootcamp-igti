import ReadLine from 'readline';
import { Controller } from '../controller/Controller';
import env from '../infra/config/env';

const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setMaxListeners(150);

const startMessage = [
  ['COMANDO', 'AÇÃO'],
  ['********', '********************************'],
  [1, 'ENCONTRAR 5 ESTADOS COM MENOS CIDADES'],
  [2, 'ENCONTRAR 5 ESTADOS COM MAIS CIDADES'],
  [3, 'ENCONTRAR CIDADE COM MAIOR NOME DE CADA ESTADO'],
  [4, 'ENCONTRAR CIDADE COM MAIOR NOME'],
  [5, 'ENCONTRAR CIDADE COM MENOR NOME DE CADA ESTADO'],
  [6, 'ENCONTRAR CIDADE COM MENOR NOME'],
  [7, 'ENCONTRAR CIDADE DE UM ESTADO'],
  [8, 'CRIAR UM JSON PARA CADA ESTADO'],
  [0, 'SAIR']
];

const printMenu = () => console.table(startMessage);
printMenu();

rl.on('line', async (value) => {
  switch (value) {
    case '1':
      console.table(await Controller.findFiveStatesLessCitiesSortDsc());
      printMenu();
      break;
    case '2':
      console.table(await Controller.findFiveStatesManyCitiesSortDsc());
      printMenu();
      break;

    case '3':
      console.table(await Controller.findLargerNameCityForEachState());
      printMenu();
      break;
    case '4':
      console.table(await Controller.findLargerNameCityFromAllStates());
      printMenu();
      break;
    case '5':
      console.table(await Controller.findSmallerNameCityForEachState());
      printMenu();
      break;

    case '6':
      console.table(await Controller.findSmallerNameCityFromAllStates());
      printMenu();
      break;

    case '7':
      console.table(env.ESTADOS);
      rl.question('Informe o id de um dos estado acima: ', async (stateId) => {
        console.table(await Controller.findCitiesBelongsToStateFromOneFile(env.CIDADES_JSON, stateId));
        printMenu();
      });
      break;

    case '8':
      await Controller.createOneJsonForEachState(env.ESTADOS_JSON);
      console.log('Feito!!!');
      printMenu();
      break;

    case '0':
      rl.close();
      break;
    default:
      console.log('Opção inválida');
      printMenu();
      break;
  }
});
