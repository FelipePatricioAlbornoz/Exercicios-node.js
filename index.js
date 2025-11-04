const http = require('http');
const os = require('os');

console.log('Bem-vindo Felipe');
console.log('--- Informações do Sistema ---');
console.log(`Sistema Operacional: ${os.type()}`);
console.log(`Memória Total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Tempo de Atividade: ${(os.uptime() / 3600).toFixed(2)} horas`);
console.log('----------------------------');
console.log(chalk.green('Mensagem de sucesso!'));
console.log(chalk.red('Mensagem de erro!'));
console.log(chalk.blue('Mensagem informativa!'));
console.log(chalk.nonExistentMethod('Esta linha vai causar um erro.'));


// Parte 1 - Item 3
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('<h1>Servidor ativo com Node.js!</h1>');
  } else if (req.url === '/hora') {
    res.writeHead(200);
    const horaAtual = new Date().toLocaleTimeString();
    res.end(`<h1>Hora atual: ${horaAtual}</h1>`);
  } else {
    res.writeHead(404);
    res.end('<h1>Rota não encontrada.</h1>');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
