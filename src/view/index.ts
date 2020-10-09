import ReadLine from 'readline';
import { startMenuMessage } from './menu';
import { Controller } from '../controller/Controller';
import env from '../infra/config/env';
import colors from 'colors';
import { welcomeMessage } from './welcomeMessage';
welcomeMessage();
colors.enable();

const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setMaxListeners(150);

const printMenu = () => {
  console.table(startMenuMessage);
  console.log(colors.bgBlue.white.bold('INFORME UM COMANDO ... '));
};

rl.on('line', async (value) => {
  switch (value) {
    case '1':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findFiveStatesLessCitiesSortDsc());
      printMenu();
      break;
    case '2':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findFiveStatesManyCitiesSortDsc());
      printMenu();
      break;

    case '3':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findLargerNameCityForEachState());
      printMenu();
      break;
    case '4':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findLargerNameCityFromAllStates());
      printMenu();
      break;
    case '5':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findSmallerNameCityForEachState());
      printMenu();
      break;

    case '6':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(await Controller.findSmallerNameCityFromAllStates());
      printMenu();
      break;

    case '7':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      console.table(env.ESTADOS);
      rl.question('Informe o id de um dos estado acima: ', async (stateId) => {
        console.table(await Controller.findCitiesBelongsToStateFromOneFile(env.CIDADES_JSON, stateId));
        printMenu();
      });
      break;

    case '8':
      console.log(colors.bgGreen.black('CARREGANDO ... '));
      await Controller.createOneJsonForEachState(env.ESTADOS_JSON);
      console.log('Feito!!! acesse: /src/infra/data ...');
      printMenu();
      break;

    case '0':
      console.log(colors.bgMagenta.bold('TCHAU!!! '));
      rl.close();
      break;
    default:
      console.log(colors.bgRed.white.bold('OOps.. Opção inválida'));
      printMenu();
      break;
  }
});

setTimeout(() => {
  printMenu();
}, 500);
