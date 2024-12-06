
# Glossário de libras - Backend

O backend do projeto "Glossário de Libras" desenvolvido durante a disciplina de Seminários 3 conta com alguns end-points para criação e busca de categorias e sinais de LIBRAS (Lingua Brasileira de Sinais).


## Usando localmente

Clone o repositório

```bash
  git clone https://github.com/JoaoOliveiraZz/Brazilian-Sign-Language-Glossary-Backend
```

Instale as dependências necessárias.
Na pasta raiz do projeto, execute:

```bash
  npm install
```

Crie um arquivo ".env" na raiz do seu projeto contendoa URL de conexão do seu banco de dados. Por exemplo:

```bash
  DATABASE_URL="url_de_conexao_do_meu_bd"
```

Sincronize o esquema com o seu banco de dados (Isto irá criar as tabelas)

```bash
  npx expo migrate dev
```

Por fim, inicie o servidor executando:
```bash
  npm run dev
```
    
## Documentação da API

#### Retorna todas as categorias

```http
  GET /api/category
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Cria uma nova categoria

```http
  POST /api/category
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `api_key`      | `string` | **Obrigatório**. A chave da sua API |
| `name`      | `string` | **Obrigatório**. O nome da nova categoria |
| `description`      | `string` | **Obrigatório**. A descrição da nova categoria |

#### Retorna todos os sinais

```http
  GET /api/signals
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna todos os sinais de uma determinada categoria

```http
  GET /api/signals/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |
| `id` | `string` | **Obrigatório**. O ID da categoria que você quer todos os sinais |

#### Cria um novo sinal

```http
  POST /api/signal
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `api_key`      | `string` | **Obrigatório**. A chave da sua API |
| `name`      | `string` | **Obrigatório**. O nome da nova categoria |
| `description`      | `string` | **Obrigatório**. A descrição da nova categoria |
| `source`      | `string` | **Obrigatório**. Link do vídeo do sinal (Deve estar público em um serviço de streaming) |
| `CategoryId`      | `string` | **Obrigatório**. ID da categoria que aquele sinal pertence |



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL` = URL de conexão com o seu Banco de Dados

