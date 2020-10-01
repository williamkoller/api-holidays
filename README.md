[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
![GitHub top language](https://img.shields.io/github/languages/top/williamkoller/api-holidays)
![GitHub language count](https://img.shields.io/github/languages/count/williamkoller/api-holidays)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/williamkoller/api-holidays)

### Requisits to run this project

- Docker
- Docker-compose

---

<!-- > update /etc/hosts -->

### Configuring /etc/hosts file

1. open file
   - ` sudo nano /etc/hosts` or `sudo vim /etc/hosts`
2. Add this line at end of file
   - `127.0.0.1 api.holidays`

### To run this project, follow the below steps

1. ##### Build Project
   - `npm i`
   - `docker-compose build`
2. ##### Seed database
   - `docker-compose run api adonis seed`
3. ##### Run Project
   \*`docker-compose up`

### after completed all steps above, jus click in the link
[API Holidays](http://api.holidays:3333)

#### Useful commands

> to access application container just run
> `docker-compose exec api /bin/sh`

> to run commands inside container just run

`docker-compose exec api <your command> `

> examples

- running adonis seed command
  `docker-compose exec api adonis seed`

- running adonis migration refresh command
  `docker-compose exec api adonis migration:refresh`

- running adonis migration refresh and seed command
  `docker-compose exec api adonis migration:refresh --seed `


