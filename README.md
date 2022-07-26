<p align="center">
   <img width="30%" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5c3-fe0f.svg"/>
</p>
<h1 align="center">
  RepoProvas
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
</div>

<br/>

# Description

RepoProvas simulates an API that manages a a system for sharing tests between students.

</br>

## Features

-   Create an account
-   Save tests
-   Search tests by disciplines and teachers

</br>

## API Reference

#### SignUp

```http
POST /signup
```

#### Request:

| Body              | Type     | Description                    |
| :---------------- | :------- | :----------------------------- |
| `email`           | `string` | **Required**. valid email      |
| `password`        | `string` | **Required**. password         |
| `confirmPassword` | `string` | **Required**. password         |

`Password min length: "8"`

#

#### SignIn

```http
POST /signin
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
	"token": "jsonwebtoken"
}
```

<br/>

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

<br/>

**-All following routes request authorization header**

<br/>

# Tests

#### Create a new credential

```http
POST /tests
```

#### Request:

| Body           | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| `name`         | `string` | **Required**. test name                 |
| `pdfUrl`       | `string` | **Required**. pdf link                  |
| `categoryId`   | `string` | **Required**. id da categoria           |
| `disciplineId` | `string` | **Required**. id da disciplina          |
| `teacherId`    | `string` | **Required**. id do professor           |

</br>

#

#### Get all tests separated by discipline

```http
GET /testsByDisciplines
```

#### Response:

```json
[
  {
    "id": 1,
    "number": 1,
    "disciplines": [
      {
        "name": "HTML e CSS",
        "tests": [
          {
            "name": "teste1",
            "pdfUrl": "http://www.abed.org.br/congresso2018/anais/trabalhos/9941.pdf",
            "teachers": {
              "name": "Diego Pinho"
            }
          },
          {
            "name": "teste2",
            "pdfUrl": "http://www.abed.org.br/congresso2018/anais/trabalhos/9941.pdf",
            "teachers": {
              "name": "Diego Pinho"
            }
          }
        ]
      },
      {
        "name": "Humildade",
        "tests": []
      }
    ]
  },
  {
    "id": 2,
    "number": 2,
    "disciplines": [
      {
        "name": "JavaScript",
        "tests": []
      },
      {
        "name": "Planejamento",
        "tests": []
      }
    ]
  },
  {
    "id": 3,
    "number": 3,
    "disciplines": [
      {
        "name": "React",
        "tests": []
      },
      {
        "name": "Autoconfiança",
        "tests": []
      }
    ]
  },
  {
    "id": 4,
    "number": 4,
    "disciplines": []
  },
  {
    "id": 5,
    "number": 5,
    "disciplines": []
  },
  {
    "id": 6,
    "number": 6,
    "disciplines": []
  }
]
```

#

#### Get all tests separated by teacher

```http
GET /testsByTeacher
```

#### Response:

```json
[
  {
    "name": "Diego Pinho",
    "term": [
      {
        "number": 1,
        "tests": [
          {
            "name": "teste1",
            "pdfUrl": "http://www.abed.org.br/congresso2018/anais/trabalhos/9941.pdf",
            "discipline": "HTML e CSS"
          },
          {
            "name": "teste2",
            "pdfUrl": "http://www.abed.org.br/congresso2018/anais/trabalhos/9941.pdf",
            "discipline": "HTML e CSS"
          }
        ]
      },
      {
        "number": 2,
        "tests": []
      },
      {
        "number": 3,
        "tests": []
      },
      {
        "number": 4,
        "tests": []
      },
      {
        "number": 5,
        "tests": []
      },
      {
        "number": 6,
        "tests": []
      }
    ]
  },
  {
    "name": "Bruna Hamori",
    "term": [
      {
        "number": 1,
        "tests": []
      },
      {
        "number": 2,
        "tests": []
      },
      {
        "number": 3,
        "tests": []
      },
      {
        "number": 4,
        "tests": []
      },
      {
        "number": 5,
        "tests": []
      },
      {
        "number": 6,
        "tests": []
      }
    ]
  }
]
```
#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`SECRET_KEY = any string`

`JWT_SECRET = "any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/leolucasguedes/projeto20-repoprovas
```

Go to the project directory

```bash
  cd projeto20-repoprovas/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate reset
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript and tests with Jest and Supertest

</br>

## Authors

-   [@leolucasguedes](https://www.github.com/leolucasguedes)

<br/>

#

## Thunder client

- Para testes manuais é possível importar o arquivo **thunder-collection_projeto20-repoprovas.json**

#

<a  href="mailto:contato.leonardo.lucas0611@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
