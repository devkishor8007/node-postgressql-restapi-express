# node-postgressql-restapi-express
I use Node js, Express js and PostgresSQL to make this repo. 

### Installation
- [Install Postgres for Windows](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
   - Select version ```13.3```
   - Select Operating System ```Windows x86-64```
- [Install Postman](https://www.postman.com/downloads/)
- Install the packages ```npm install -g nodemon```
#

## Setup

 -  Fork and clone
 - run npm install
 - create a ```user``` tables and tab to ```column``` where you have to add id,fname,lname,age,address in your postgreSQL
 - make a ```.env``` directory and add this
 #
 
     DATABASE = postgres <-- name of database of postgressSQL
     HOST = localhost
     DATABASE_PORT = 5432 <-- default port of postgressSQL
     DATABASE_USER = postgres <-- Add your username
     DATABASE_PASSWORD = yourpassword <-- Add your password
     PORT = 5500 <-- port that Server is listen
       
 - run ```npm start``` in your root project folder

  #
  ## API Endpoints

Run the following on Postman

Demo DATA API Endpoints:

   - POST ```localhost:5500/data/```
   - GET(List all) ```localhost:5500/data/```
   - GET(Specific) ```localhost:5500/data/:id```
   - PUT ```localhost:5500/data/:id```
   - DELETE ```localhost:5500/data/:id```
#
### How to add 'node_modules' to .gitignore file?

    git rm -r --cached node_modules
    git commit -m 'Remove the now ignored directory node_modules'
    git push origin <branch-name>

## Some Terms - You should know

```REST``` stands for Representational State Transfer. REST has SSL and HTTPS for security. REST API uses Web Application Description Language for describing the functionalities being offered by web services.

```API``` stands for Application Program Interface; a set of routines, protocols and tools for building software and applications.

```Node.js``` is a JavaScript runtime built on Chrome's V8 JavaScript engine.

```Express js``` is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

```PostgreSQL```, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.
#
    
