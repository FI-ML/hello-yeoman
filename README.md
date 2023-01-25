# YEOMAN EXAMPLE

## Step one:

```bash
 $ mkdir generator-hello-yeoman
 $ cd generator-hello-yeoman
 $ npm init -y && npm install yeoman-generator
 $ npm i yeoman-generator
 $ npm i yosay chalk lodash @types/lodash -D
```

## Step two:

### Create dir
    .
    ├── generator             # yeaoman starts from here
        ├── app     
           ├── templates      # for static, dynamic files and folders
           ├── index.ts 

```bash
 $ npm link                 # add to yeoman global generators
 $ npx tsc -p . --watch     # compile ts to js
 $ yo hello-yeoman          # run generator
```

## TODO:

* create modules
* ...
