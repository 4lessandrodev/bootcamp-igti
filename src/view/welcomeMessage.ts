import figlet from 'figlet';

export const welcomeMessage = () => figlet('Bem vindo', function (err, data) {
  if (err) {
    return;
  }
  console.log(data);
});
