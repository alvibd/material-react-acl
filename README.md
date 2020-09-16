# Material React Access Control Logic

Easy Installation
-----------------
**Project Setup Guide**

[Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/#react-router-and-nginx)

**Requirements**
- [docker](https://www.docker.com/get-started)

**Installation Step**
- clone repository: `$ git clone https://github.com/alvibd/material-react-acl.git`
- enter project directory: `$ cd material-react-acl`
- checkout to dev branch: `$ git checkout -b dev`
- run : `$ docker-compose up -d`
- enter application container : `$ docker-compose exec react_acl sh`
- install node packages: `$ npm install`
- exit container: `$ exit`
- to stop the container run: `$ docker-compose down --remove-orphans`
- after the server has started visit localhost
- use email: _superadministrator@app.com_ and password: _password_