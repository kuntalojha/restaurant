# RESTURANT MANAGEMENT SYSTEM

## FILE STRUCTURE

```
├── client
│   ├── node_modules
│   ├── Public
│   │   └── favicon.ico
│   ├── src
|   │   ├── assets
│   │   |    └── restaurant.png
│   |   ├── components
│   │   │     ├── admin
│   │   │     |     └── AdminNav.jsx
│   │   │     ├── chef
│   │   │     |     └── ChefNav.jsx
│   │   │     ├── common
│   │   │     |     ├── CheckAuth.jsx
│   │   │     |     ├── Footer.jsx
│   │   │     |     ├── Gallery.jsx
│   │   │     |     ├── Header.jsx
│   │   │     |     └── Profile.jsx
│   │   |     ├── ui
│   │   │     |   ├── button.jsx
│   │   │     |   ├── input.jsx
│   │   │     |   ├── label.jsx
│   │   │     |   └── text.jsx
|   |   |     └──user
|   |   |          └── UserHeader.jsx
|   |   ├── lib
|   |   |    └── utils.js
|   |   ├── pages
|   |   |    ├── admin
|   |   |    |    └── AdminDashboard.jsx
|   |   |    ├── auth
|   |   |    |    ├── Login.jsx
|   |   |    |    └── Registration.jsx
|   |   |    ├── chef
|   |   |    |    └── ChefOrders.jsx
|   |   |    ├── common
|   |   |    |     ├── Home.jsx
|   |   |    |     |── NotFoundPage.jsx
|   |   |    |     └── PaymentGateway.jsx
|   |   |    └── user
|   |   |         |── UserCheckOut.jsx
|   |   |         |── UserHome.jsx
|   |   |         |── UserItem.jsx
|   |   |         └── UserMenu.jsx
|   |   ├── App.css
|   |   ├── App.jsx
|   |   ├── index.css
|   |   └── main.jsx
|   ├── .gitignore
|   ├── components.json
|   ├── eslint.config.js
|   ├── index.html
|   ├── jsconfig.app.json
|   ├── jsconfig.json
|   ├── postcss.config.js
|   ├── README.md
|   ├── tailwind.config.js
|   └── vite.config.js
|
├── documentation
|   └── restaurant.md
|
├── server
|   ├── controllers
|   │     ├── menu
|   │     │     ├── controller.RestaurantMenu.js
|   │     └── order
|   │         ├── user
|   │              └── controller.RestaurantOrder.js
|   ├── database
|   │     ├── data
|   │     |   └── pizzas.json
|   |     └── connectionDB.js
|   ├── modules
|   |     ├── manu
|   |     |   └── model.RestaurantMenu.js
|   |     └── order
|   |         └── user
|   |              └── model.UserOrders.js
|   ├── routes
|   │     ├── menu
|   │     │     └── router.RestaurantMenu.js
|   │     └── order
|   │.env
|   └── server.js

```
