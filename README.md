# [/r/webdev](https://www.reddit.com/r/webdev/comments/4of1m9/weeklydev_project_1_to_do_list/)'s weekly project: To-Do

`client/` contains a simple Vue.js app. `server/` contains another simple feathers app.

## Installation

```shell
cd server/
npm install

cd ../client
npm install
npm run build # build the client
```

Remember to open `server/config/default.json` and enter your Mailgun API key and Domain. 

## Starting the app

If you built the client, then all you need to do is start the feathers server:

```shell
cd server/ && npm start
```

And then point your browser to `http://localhost:3030`.

## Developing

To start hacking just run the `dev` tasks for both, the server and client.

```shell
cd server/
npm run dev # this will keep running

# In another terminal
cd client/
npm run dev
```

And point your browser to `http://localhost:8080`.
