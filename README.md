<h4 align="center">
 <h1 align="center">Fincheck API</h1>
</h4>
---

<h2>About 📝</h2>

<p align="center">The backend for the Fincheck project, a solution for you to control your expenses easily. Created using NestJS, PrismaDB, TypeScript, PostgreSQL and Class Validator/Transformer!</p>

---

<h2>Technologies 🚀</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [PrismaDB](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Class Validator](https://github.com/typestack/class-validator)
- [Class Transformer](https://github.com/typestack/class-transformer)

<h2>Installation 👨‍💻</h2>

### Before you can start, you have to install these tools on your machine

- <b>[Git](https://git-scm.com)</b>
- <b>[NodeJS](https://nodejs.org/)</b>
- <b>[PostgreSQL](https://www.postgresql.org/)</b>

### Setting up the database
- How to setup a local database desktop using postgres: https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database

```
- Run:
$ yarn prisma migrate dev

- Now you are good to go
```

### Running the project

```txt
- Type

$ yarn install

- Copy .env.example to .env and add values there

- Should run a Postgres instance and add the URL to .env

- Example, for a DB Name 'Fincheck', user 'root' and password 'root':
DATABASE_URL="postgresql://root:root@localhost:5432/fincheck?schema=public"

- And finally:

$ yarn start:dev

(if you don't have Yarn installed, please install here "https://yarnpkg.com/")

- And finally, make your API calls to http://localhost:3000
```