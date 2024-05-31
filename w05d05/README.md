# W05D05 - Mid-term Project Kickoff

### Why?
* learn how to work in a team
* get to know the team environment
* reinforce what you already know

### Pick a Project

### User Stories
* a user story describes what a user can/cannot do in the app
* As a ______, I can _______, because ________


As a logged in user, I can see a list of available maps, because I'm interested in things around me
As a non-logged in user, I cannot edit the pins on a map, because they don't belong to me

/planning/user-stories.md

### Nouns === tables
* ERD
* 3-4 tables avg
* lowest fidelity possible

/planning/erd.png
/planning/erd-stretch.png

### Routes
* RESTful routing

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

### MVP
* Minimum Viable Product
* minimum feature set that a user would find useful
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we can show off in 5 mins
* if you're not going to show it, don't build it

### Wireframes/Mockups
* isn't a design school

/planning/home-page.png

### User Login
* don't do it

```js
// http://localhost:8080/login/2
app.get('/login/:id', (req, res) => {
  // encrypted cookies
  req.session.userId = req.params.id;

  // plaintext cookies
  res.cookie('userId', req.params.id);

  // send the user somewhere
  res.redirect('/home');
});
```

### Tech Choices
* Back end: Express, Node, Postgres
* Front end: HTML, CSS, JS, jQuery, bootstrap, tailwind, SASS

1. Create a Link tag for the .css version of an .scss file (layout.css)
2. Middleware is going to look for the .scss version of that file (layout.scss)
3. Compile it and put it in public/styles
4. Express static middleware will serve up the .css version

### Dividing up the work
* Vertical => each dev works on one feature including FE, BE, and database
* Horizontal => each dev works on one layer of the cake (either FE, BE, or DB)
* Pair programming

### Communication
* 




