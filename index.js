const os = require('os');
const chalk = require('chalk');
const axios = require('axios');

// Parte 1
console.log('Bem-vindo ao mundo do Node.js, felipe_albornoz!');
console.log('\n--- Informações do Sistema ---');
console.log(`Sistema Operacional: ${os.type()}`);
console.log(`Memória Total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Tempo de Atividade: ${(os.uptime() / 3600).toFixed(2)} horas`);
console.log('----------------------------\n');

// Parte 2
console.log(chalk.green('Mensagem de sucesso!'));
console.log(chalk.red('Mensagem de erro!'));
console.log(chalk.blue('Mensagem informativa!\n'));

// Parte 3
const fetchDogImage = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(chalk.blue('--- Imagem de Cachorro Aleatória ---'));
    console.log(`URL da imagem: ${response.data.message}`);
    console.log(chalk.blue('------------------------------------\n'));
  } catch (error) {
    console.error(chalk.red('Erro ao buscar imagem de cachorro:'), error.message);
  }
};

const fetchPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = response.data;
    console.log(chalk.blue(`--- Informações do Pokémon: ${pokemon.name} ---`));
    console.log(`Nome: ${pokemon.name}`);
    console.log(`Peso: ${pokemon.weight}`);
    console.log(`Altura: ${pokemon.height}`);
    console.log(`Habilidades: ${pokemon.abilities.length}`);
    console.log(chalk.blue('-----------------------------------------\n'));
  } catch (error) {
    console.error(chalk.red(`Erro ao buscar dados do Pokémon "${pokemonName}":`), error.message);
  }
};

const run = async () => {
  await fetchDogImage();
  await fetchPokemonData('charmander');
};

run();