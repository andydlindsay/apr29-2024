# Project Planning

### To Do
[x] Consider your goals with Finals  
[x] Start with the Idea  
[x] Explore Relevant APIs, Libraries, Packages and Tools  
[x] Consider your Stack  

### Consider your goals with Finals

What do *you* want to get out of finals?

* More experience with a particular part of the stack: front-end, back-end, database
* More experience building a particular type of feature: API end-points, single-page applications
* A chance to try a new language or library: TypeScript, Vue, Next.js, Python
* Solve a personal problem

Hopefully more than one of the above resonate with you! Consider each carefully and carry these with you as you journey towards finals. \*Because finals are team sport, be prepared to find a nice middle-ground with your team, but don't be afraid to make your goals known! See if you have goals in common and how you might be able to incorporate your goals into your approach.

### Start with the Idea

So you've considered a thing-or-two that you'd like to get out of the project. In-order to know if, how, or when you can touch on these goals, we'll need to know what problem it is we're trying to solve.

Finals are an interesting time, as *you* have control over your project and group!

Think about your daily life. What do you normally get up to? Is there a pain-point... something that gets in the way, that you wish was a little easier, more straightforward, or just plain automated? This can be a great source of both inspiration and motivation. Don't be afraid of "quirky" or strange ideas, these are often more memorable! Remember, finals should be an *experience* you can share and discuss in future interviews.

Some examples might include:

* I like to ride my bicycle, but it is hard to find new trails
    * An application for sharing fun bike paths using Google Maps!
* Every weekend my friends and I play Dungeons and Dragons, but it is a hassle to ensure everyone brought their dice and to keep track of everyone's changing stats
    * An application for quickly building characters, rolling different dice, and updating character sheets over time
* I forget to water my plants, they wilt, and it makes me sad
    * Purchase a Rasberry Pi Pico, a set of moisture sensors and wireless cards, and have them communicate via network to a web server that sends SMS reminders to water plants as their soil dries

Think outside-of-the-box, really consider *everything* in your daily life... your hobbies, your work, your chores, what you do with family/friends, how you study—what's something that could make any of these things easier? More organized? More *fun*?

***Let's brainstorm some ideas together!***

### Explore Relevant APIs, Libraries, Packages and Tools

Once you've settled on an idea or two, it is time to do some research. consider what the most *risky* part of the project might be. Maybe your application is dependent on an AI's API to give you certain types of responses. Write a tiny experiment for this risk-intensive piece *first*. Find out if this service can even do what you're hoping for, as if it can't, you want to find out *now* instead of halfway through the project.

Maybe your application is about managing medications—is there an API for prescription information you can use? Is it free and easy to use?

Maybe your application is dependent on GPS co-ordinates—is the GPS co-ordinate data accurate enough for your use-case?

Perhaps your application is dependent on a Rasberry Pi Pico connecting to a network. What is involved with this? Can you run an experiment *now* to see if this will be reliable / viable for your finals?

Identify the highest risks, and see if they will make-or-break your project. Some things flat-out won't work, but we don't know unless we run some experiments.

**Do not *assume* everything will just work out. You do *not* want to find out 75% in to your project work that your project is impossible due to an assumption. Test the trickiest things before the project even starts!**

### Consider your Stack

What have we covered so far?

Back-end:

* [NodeJS `http` module](https://nodejs.org/api/http.html#http)
    * [Express](https://expressjs.com/)
    * [EJS](https://ejs.co/)

Front-end:

* [HTML5](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
* [CSS3](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
    * [Bootstrap](https://getbootstrap.com/)
    * [SASS](https://sass-lang.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    * [jQuery](https://jquery.com/)
    * [React](https://react.dev/)

Database:

* [PostgreSQL](https://www.postgresql.org/)

Helpful `npm` Packages:

* [`dotenv`](https://www.npmjs.com/package/dotenv)
* [`express`](https://www.npmjs.com/package/express)
    * [`nodemon`](https://www.npmjs.com/package/nodemon)
    * [`morgan`](https://www.npmjs.com/package/morgan)
    * [`cookie-parser`](https://www.npmjs.com/package/cookie-parser)
    * [`cookie-session`](https://www.npmjs.com/package/cookie-session)
    * [`sass`](https://www.npmjs.com/package/sass)
* [`ejs`](https://www.npmjs.com/package/ejs)
* [`pg`](https://www.npmjs.com/package/pg)
* [`axios`](https://www.npmjs.com/package/axios)
* [`create-react-app`](https://www.npmjs.com/package/create-react-app)
* [`javascript-time-ago`](https://www.npmjs.com/package/javascript-time-ago)
* [`chalk`](https://www.npmjs.com/package/chalk)
