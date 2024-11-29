# API de Cadastro de Produtores Rurais

Esta API foi desenvolvida em Node.js com TypeScript e utiliza PostgreSQL como banco de dados. O objetivo principal é gerenciar os dados de produtores rurais, suas fazendas e culturas plantadas, além de fornecer um dashboard com informações consolidadas.

---

## Funcionalidades

- **CRUD de Produtores Rurais**: Cadastro, edição, listagem e exclusão de produtores rurais.
- **Validações de dados**:
  - CPF ou CNPJ válidos.
  - Soma da área agricultável e vegetação não pode exceder a área total.
- **Dashboard**:
  - Total de fazendas em quantidade e hectares.
  - Gráficos de distribuição por estado, culturas e uso do solo.
- **Testes automatizados**: Unitários e de integração.

---

## Requisitos

- **Node.js** (v16 ou superior)
- **PostgreSQL**
- **npm** ou **yarn**

---

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo dataSource.ts com os detalhes do banco de dados. Exemplo:
```js
username: "POSTGRESQL_USER",
password: "POSTGRESQL_PASSWORD",
database: "POSTGRESQL_DATABASE_NAME",
```

4. Execute as migrações para criar as tabelas:
```bash
npm run typeorm migration:run
```

5. (Opcional) Popule o banco de dados com dados iniciais:
```bash
npm run seed:run
```

6. Inicie o servidor:
- **Em modo de desenvolvimento:**
```bash
npm run dev
```
- **Em modo de produção:**
```bash
npm run build
npm start
```

## Comandos disponíveis

### Comandos de Desenvolvimento
```npm run dev```
Inicia o servidor em modo de desenvolvimento usando ts-node-dev, com hot-reload ativado.

```npm run build```
Compila os arquivos TypeScript para JavaScript e os armazena na pasta dist.

```npm start```
Inicia a API em modo de produção executando o arquivo compilado dist/server.js.

### Comandos de Testes
```npm run test```
Executa todos os testes automatizados utilizando Jest.

```npm run test:watch```
Executa os testes em modo de observação, ideal para desenvolvimento.

```npm run test:coverage```
Gera um relatório de cobertura de código, indicando quais partes foram testadas.

### Comandos de Banco de Dados
```npm run typeorm```
Comando genérico para gerenciar migrações e outras operações do TypeORM. Exemplos:

- Gerar uma nova migração:
```bash
npm run typeorm migration:generate -- -n NomeDaMigracao
```

- Executar as migrações:
```bash
npm run typeorm migration:run
```
- Carregar dados iniciais:
```bash
npm run seed:run
```

## Estrutura de Pastas
```plaintext
src/
├── controllers/         # Controladores para lidar com as requisições HTTP
├── entities/            # Entidades do banco de dados
├── dtos/                # Objetos de transferência de dados (Data Transfer Objects)
├── repositories/        # Repositórios para acessar e manipular os dados
├── services/            # Contém a lógica de negócios
├── middlewares/         # Middlewares de validação e autenticação
├── routes/              # Configuração das rotas da API
├── tests/               # Testes unitários e de integração
├── migrations/          # Arquivos de migração gerados pelo TypeORM
└── seeds/               # Scripts para popular o banco de dados
```

## Endpoints
**1. CRUD de Produtores Rurais**

- **Criar Produtor**
```http
POST /producers
```

**Body**: 
```json
{
  "cpf_cnpj": "12345678901",
  "name": "João da Silva",
  "farm_name": "Fazenda Esperança",
  "city": "Cidade X",
  "state": "SP",
  "total_area": 100,
  "agricultural_area": 60,
  "vegetation_area": 40,
  "crops": ["Soja", "Milho"]
}

```

- **Listar Todos os Produtores**:
```http
GET /producers
```

- **Obter um Produtor Específico**:
```http
GET /producers/:id
```

- **Atualizar um Produtor**:
```http
PUT /producers/:id
```

**Body**: Mesmo

- **Excluir um Produtor**:
```http
DELETE /producers/:id
```

**2. Dashboard**

- **Obter Dados Consolidados**
```http
GET /dashboard
```

**Resposta**
```json
{
  "totalFarms": 5,
  "totalHectares": 660,
  "farmsByState": [
    {
      "state": "MG",
      "count": 1
    },
    {
      "state": "SP",
      "count": 4
    }
  ],
  "cropsByType": [
    {
      "crop": "Cana de Açúcar",
      "count": 1
    },
    {
      "crop": "Soja",
      "count": 2
    },
    {
      "crop": "Algodão",
      "count": 1
    },
    {
      "crop": "Café",
      "count": 2
    },
    {
      "crop": "Milho",
      "count": 3
    }
  ],
  "landUsage": [
    {
      "use": "agriculture",
      "hectares": 0
    },
    {
      "use": "vegetation",
      "hectares": 210
    }
  ]
}
```

## Testes
### Rodar Todos os Testes
```bash
npm run test
```

### Modo de Observação
```bash
npm run test:watch
```

### Cobertura de Testes
```bash
npm run test:coverage
```

## Contribuição
Para contribuir com o projeto:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações: git checkout -b minha-feature.
3. Envie suas alterações: git push origin minha-feature.
4. Abra um pull request.

## Licença
Este projeto está licenciado sob os termos da GNU GENERAL PUBLIC LICENSE.