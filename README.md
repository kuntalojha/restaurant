# RESTURANT MANAGEMENT SYSTEM

## FILE STRUCTURE

`─┐ ├── └── |`

```
├── client
│   ├── node_modules
│   |
│   ├── Public
│   │   ├── hero.png
│   │   ├── logo.png
│   │   └── menu.png
|   |
│   ├── src
│   │   ├── api
│   │   │    ├── card.js
│   │   │    └── card.js
|   |   |
|   │   ├── assets
│   │   |    └── favicon.ico
|   │   |
│   |   ├── components
│   │   │     ├── admin
│   │   │     |     ├── AdminHader.jsx
│   │   │     |     └── AdminProfile.jsx
|   |   |     |
│   │   │     ├── auth
│   │   │     |     ├── CheckAuth.jsx
│   │   │     |   
│   │   │     ├── chef
│   │   │     |     ├── ChefHeader.jsx
|   │   │     |     └── ChefProfile.jsx
|   |   |     |
│   │   │     ├── common
│   │   │     |     ├── Footer.jsx
│   │   │     |     ├── Gallery.jsx
│   │   │     |     ├── Header.jsx
│   │   │     |     └── MenuCard.jsx
|   |   |     |
│   │   |     ├── ui
│   │   │     |   ├── button.jsx
│   │   │     |   ├── card.jsx
│   │   │     |   ├── carousel.jsx
│   │   │     |   ├── dropdown-menu.jsx
│   │   │     |   ├── input.jsx
│   │   │     |   └── label.jsx
|   |   |     |
|   |   |     └──user
|   |   |          └── UserHeader.jsx
|   |   |
|   |   ├── layout
|   |   |    ├── AdminLayout.jsx
|   |   |    ├── ChefLayout.jsx
|   |   |    └── UserLayout.jsx
|   |   |
|   |   ├── lib
|   |   |    └── utils.js
|   |   |
|   |   ├── pages
|   |   |    ├── admin
|   |   |    |    ├── AdminDashboard.jsx
|   |   |    |    └── AdminHome.jsx
|   |   |    |
|   |   |    ├── auth
|   |   |    |    ├── Login.jsx
|   |   |    |    └── Registration.jsx
|   |   |    |
|   |   |    ├── chef
|   |   |    |    ├── ChefHome.jsx
|   |   |    |    └── ChefOrders.jsx
|   |   |    |
|   |   |    ├── common
|   |   |    |     ├── Menu.jsx
|   |   |    |     |── PageNotFound.jsx
|   |   |    |     └── PaymentGateway.jsx
|   |   |    |
|   |   |    └── user
|   |   |         |── UserCheckOut.jsx
|   |   |         |── UserHome.jsx
|   |   |         └── UserItem.jsx
|   |   |
|   |   ├── routes
|   |   |    ├── AdminRoute.jsx
|   |   |    ├── ChefRoute.jsx
|   |   |    └── UserRoute.jsx
|   |   |
|   |   ├── theme
|   |   |    ├── mode-toggle.jsx
|   |   |    └── theme-provider.jsx
|   |   |
|   |   ├── App.css
|   |   ├── App.jsx
|   |   ├── index.css
|   |   └── main.jsx
|   |
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
|   │     │     └──  ControllerMenu.js
|   │     |
|   │     └── order
|   │         ├── user
|   │              └── controller.RestaurantOrder.js
|   │
|   ├── database
|   │     ├── data
|   │     |   └── pizzas.json
|   |     └── connectionDB.js
|   |
|   ├── modules
|   |     ├── manu
|   |     |   └── ModelMenu.js
|   |     |
|   |     └── order
|   |         └── user
|   |              └── model.UserOrders.js
|   |
|   ├── node_modules
|   │     
|   |
|   ├── routes
|   │     ├── menu
|   │     │     └── RouteMenu.js
|   │     |
|   │     └── order
|   │         
|   │
|   ├── .env
|   ├── package-lock.json
|   ├── package.json
|   └── server.js
|
|
├── .gitignore
└── README.md

```
