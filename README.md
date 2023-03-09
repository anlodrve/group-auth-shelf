# Auth Shelf

## Description

_Duration: 1.5 days Sprint_

The application is a web-based digital shelf that allows registered users to add and delete items. To access the application, users must register an account and log in. Once logged in, users can add items to the digital shelf and delete the item(s) they added.

---
## **TABLE OF CONTENT:**
1. [Screenshot of application](#screenshots-of-application)
1. [Installation & Setup](#installation--setup)
1. [Usage](#usage)
1. [Technologies utilization](#technologies-utilization)
1. [Contributors](#contributors)


---
## Screenshots of application

---

## Installation & Setup
1. `npm install`
1. Start postgres using brew services start postgresql (database name: `auth_shelf`)
1. `npm run server` in your terminal
1. `npm run client` in another terminal. 
1. Navigate to localhost:3000

---

## Usage
To use the digital shelf application, follow these steps: 

1. Register an account on the application

1. Log in to the application with your registered account. 

1. Navigate to the Shelf page (ShelfPage.js at /shelf) to view all the items currently stored in the database. 

1. To add a new item to the shelf, click on the "Add Item" button on the Shelf page. 

1. In the form that appears, enter the image URL and description of the item. 

1. Click on the "Submit" button to add the new item to the shelf. The newly added item will immediately appear in the list. 

1. To delete an item from the shelf, find the item in the list and click on the "Delete" button next to the item. 

1. If you were the one who added the item to the shelf, the item will be deleted from the database and the list will be updated.

---

## Technologies utilization 

* Javascript
* HTML
* CSS
* [React](https://reactjs.org/)
* [React Router v5](https://v5.reactrouter.com/web/guides/quick-start)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Node js](https://nodejs.org/en/about/)
* [Express js](https://expressjs.com/)
* [Axio](https://axio.com/)
* [Postico 2](https://eggerapps.at/postico2/)
* [PostgreSQL](https://www.postgresql.org/)
* [Postman](https://www.postman.com/)
* [GitHub](https://github.com/xaihang/) 
* [Passport](https://www.passportjs.org/packages/passport-local/)
* [SweetAlert2](https://sweetalert2.github.io/)

---
## Contributors:
* [Andrea](https://github.com/anlodrve)
* [John](https://github.com/john-mayou)
* [Nolen](https://github.com/nolenlawton)
* [Xai](https://github.com/xaihang)

