
<h1 align="center">
  <br>
      <img src="https://i.ibb.co/jMstmV4/logo.jpg" alt="codeheir logo" title="Codeheir"  height="200" />
  <br>

  p5-multiplayer-game-starter
  <br>
</h1>

<h4 align="center">A p5/node.js/express/socket.io starter to allow you to quickly develop multiplayer games</h4>




A very simple way to kick-start your multiplayer game development using express, socket.io and p5.js. It represents an opinionated approach to multiplayer game development which should allow you to skip the laborious beginning boiler-plate steps. Please check out my blog https://codeheir.com/2019/05/11/how-to-code/ for more information on the repository and how to code multiplayer games!

## How to use
1. `git clone https://github.com/LukeGarrigan/p5-multiplayer-game-start.git`
2. `npm install` in the root directory
3. `npm start` to get it running!

## Details 
The project is very simple, it sets up a client `Player` class and a server `Player`. Every 16ms the server emits the current state of the game to the client. If a new client joins the server a new `Player` will be added to the game and displayed on all clients, it also automatically removes players when they leave the game. These are the standard features I frequently have to reproduce when creating a new multiplayer game, so I hope you find this as useful as I do!

## Demo

### Player one joins
![Player one joins](https://snag.gy/10h6Cs.jpg)


### Player two joins
![Player two joins](https://snag.gy/JpebEm.jpg)

### Player two leaves
![Player two joins](https://snag.gy/10h6Cs.jpg)
