
<h1 align="center">
  <br>
  <br>
  p5-multiplayer-game-starter
  <br>
</h1>

<h4 align="center">A p5/node.js/express/socket.io starter to allow you to quickly develop multiplayer games</h4>

<a href="https://twitter.com/codeheir">
    <img src="https://pbs.twimg.com/profile_images/1025347326037159936/XI_T6kun_400x400.jpg" alt="codeheir logo" title="Codeheir" align="right" height="100" />
</a>



A very simple way to kick-start your multiplayer game development using express, socket.io and p5.js. It represents an opinionated approach to multiplayer game development which should allow you to skip the laborious beginning boiler-plate steps.

## How to use

1. Clone the project
2. `npm install` in the root directory
3. `npm start` to get it running!

## Details 
The project is very simple, it sets up a client `Player` class and a server `Player`. Every 16ms the server emits the current state of the game to the client. If a new client joins the server a new `Player` will be added to the game and displayed on all clients, it also automatically removes players when they leave the game. These are the standard features I frequently have to reproduce when creating a new multiplayer game, so I hope you find this as useful as I do!
