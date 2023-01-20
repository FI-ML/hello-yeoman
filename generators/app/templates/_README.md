# <%= appname %>

## Description
<%= description %>

## TechStack

* TypeScript
* NestJs
* TypeOrm
* PostgresDB

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Database

```bash 
$ cd /<%= appname %>/docker
$ docker-compose up -d
```

### Configuration

* [env file](.env) there you can set dbname, username and password
  important is the env file have a validation you rewrite the names you must update
  the [env.validation.ts](src%2Fconfig%2Fvalidations%2Fenv.validation.ts)

``` ts
  imports: [TypeOrmModule.forRoot(typeormConfig)],
```
