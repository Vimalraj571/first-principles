# FirstPrinciple

Simple Testimonial App written in Node and Mongo

Functionality

    a. Add Testimonial (POST)
    b. View Testimonial(s) (GET ALL)
    c. Edit Testimonial (PUT)
    d. Delete Testimonia (Update Active = 0) (DELETE) (ACTUALLY Updating Status)

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

Sample `.env` file

```
MONGODB_URI=YOUR_MONGO_SERVER
MONGODB_PASS=YOUR_PASS
PORT=PORT_FOR_EXPRESS_SERVER
SECRET=YOUR_ANY_SECRET_KEY
```

- Run server

```
node index.js
```

Just UI Build Using Netifly : <https://snazzy-dusk-dd9d84.netlify.app/>

Note:

- The version Netifly `won't have the Testimonals` There is `no backend is running for that`. So its just UI with out Testimonial
- For Heroku I have added scripts PS: I don't have Heroku Credits for Running.
- If the both `frontend` and `backend` `running in local` with external `mongo server` we can add,update,delete testimonials

Also Attached Video Demo

https://user-images.githubusercontent.com/8166149/216829026-6fafbb18-6876-4218-bc2d-ff2471b10091.mp4
