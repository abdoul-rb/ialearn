# ialearn

## Git

Pour éviter de casser la branche **Master**, la branche principale, nous allons travailler sur une branche enfant de la branche Master.
Nous allons appelé cette branche **develop**, pour dire qu'il s'agit de la branche à utilisé en développemnt, la branche Master sera reservé pour la mise en ***prod***.

#### Commande a exécuter :

```bash
 # Créer la branche **develop** en local
 $ git checkout -b develop
 
 # Suivre la branche **develop** du remote**
 $ git pull -u origin develop
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
