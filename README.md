# Battleship Game

Battleship Game is a multiplayer game built with React/React Native on the frontend and Express with Socket.io on the backend. It allows players to engage in battleship matches with unique game rooms, ship placement, and exciting gameplay features.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)

## Features

### Frontend (React/React Native)

- **Main Screen:**

  - Displaying a list of open and recent games.
  - Creating a new game with a unique link.
  - Facebook authentication.

- **Game Lobby:**

  - Entering player names.
  - Connecting to the room through a generated link.

- **Ship Placement:**

  - Rendering ships of various sizes on the field using the API context.
  - Adding and moving ships during placement.

- **Game Board:**

  - Selecting a cell for a shot.
  - Displaying shot results (hit, miss, sunk).
  - Outputting game statistics.

- **Super Weapon:**
  - Adding a button to use a 2x2 area super weapon.

### Backend (Express, Socket.io)

- **Room Creation and Management:**

  - Creating unique rooms for each game.
  - Managing connections through Socket.io.

- **Ship Placement:**

  - Storing information about ship placement for each room.

- **Game Logic:**

  - Checking shots and updating the game board.
  - Handling super weapons.
  - Sending move results through sockets.

- **Statistics and Data Storage:**
  - Storing statistics for each game.
  - Logic for updating statistics upon game completion.

## Technologies

- **Frontend:**

  - React
  - React-router-dom
  - Axios
  - Tailwind CSS

- **Backend:**
  - Express
  - Socket.io

## Installation

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install`.
3. Navigate to the `backend` directory and run `npm install`.
4. Start the backend server by running `npm start` in the `backend` directory.
5. Start the frontend application by running `npm start` in the `frontend` directory.
