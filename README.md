# FirstPrinciple

Simple Testimonial App written in Node and Mongo

Functionality

    1. Testimonial (REST Operations)

*__For More Information Check the Postman Collection__*

Steps:

- Clone repository

```bash
yarn install
```

- Add __PORT__,__MONGODB_PASS__,__SECRET__,__MONGODB_URI__ in the `.env`
  - `PORT` - Node server Port
  - `SECRET` - Secret for jwt
  - `MONGODB_URI` - URI for Mongo in following format `mongodb+srv://user:password@host/TestimonialApp?retryWrites=true&w=majority`
  - `MONGODB_PASS` - Password for mongo

- Note: In `MONGODB_URI` only replace the `user` with your username and don't replace the `password` in the `MONGODB_URI`.Give password in `MONGODB_PASS`.

```bash
touch .env
```

- Run server

```
node index.js
```
