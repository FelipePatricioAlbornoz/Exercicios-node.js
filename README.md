# Exercícios Node.js — Fundamentos e Prática

Este repositório contém uma coleção de exercícios para praticar Node.js, explorando desde conceitos essenciais até consumo de APIs, tratamento de erros e criação de servidores HTTP e Express.

## Informações Gerais
- **Abertura:** 29/10/2025  
- **Entrega:** 05/11/2025  
- **Formato:** Repositório público no GitHub  
- **Tema:** Fundamentos, APIs e boas práticas no backend com JavaScript

---

## Objetivos
- Introdução ao ambiente Node.js
- Uso de módulos nativos (`os`, `http`)
- Criação de scripts com npm
- Uso de pacotes externos (`chalk`, `axios`)
- Consumo e tratamento de APIs públicas
- Estruturação de servidor com `http` e `express`

---

## Estrutura Proposta do Projeto

```
.
├── index.js
├── package-lock.json
├── package.json
└── README.md

```

---

## Parte 1 — Fundamentos do Node.js
- Exibição de mensagem no terminal
- Uso do módulo `os` para informações do sistema
- Servidor HTTP com rotas básicas:
  - `/` → “Servidor ativo com Node.js!”
  - `/hora` → exibe a hora atual
  - Qualquer outra rota → “Rota não encontrada.”

---

## Parte 2 — npm e Dependências
- Projeto iniciado com `npm init -y`
- Script `"dev": "node index.js"`
- Uso do pacote `chalk` para mensagens coloridas:
  - Sucesso (verde)
  - Erro (vermelho)
  - Informativo (azul)

---

## Parte 3 — APIs com Axios
- Consumo da **Dog API**
- Consumo da **PokéAPI**
- Exibir no terminal:
  - Nome
  - Peso
  - Altura
  - Quantidade de habilidades do Pokémon

---

## Parte 4 — Tratamento de Erros
- Uso de `try/catch`
- Caso o Pokémon não exista:
```

Pokémon não encontrado. Verifique o nome e tente novamente.

```

---

## Parte 5 — Desafios Extras
- Mini Pokédex solicitando 3 Pokémon e exibindo seus tipos
- Consumo da API Chuck Norris e exibição de piada
- Servidor **Express** com rota:
```

/pokemon/:nome → retorna JSON com informações do Pokémon

````

---

## Execução do Projeto

### Instalar dependências
```bash
npm install
````

### Rodar aplicação principal

```bash
npm run dev
```

### Rodar servidor Express

```bash
node server.js
```


---

## Autor

Felipe Patricio Albornoz

```
Cavalo
```
