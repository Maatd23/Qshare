# QShare - README

QShare is a web application that allows users to manage their orders. Follow the steps below to run the program:

## Prerequisites

Make sure you have the following tools installed on your system:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, comes with Node.js)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/Maatd23/Qshare.git
```

2. Change into the project directory:

```
cd qshare
```

## Step 1: Run the Server

1. Change into the server directory:

```
cd server
```

2. Install the required dependencies:

```
npm install
```

3. Run the database migration:

```
npm run db-dev
```

> **Note:** Be careful not to use the same database name as the configuration database, as it will be dropped.

4. Start the server:

```
npm run start
```

## Step 2: Running the App

1. Change into the app directory:

```
cd ../app
```

2. Install the required dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

## Step 3: Register User

Before using the application, if you don't have an account, you need to register as a user:

1. Visit the `/register` page or click on the register button to create your account.

## Step 4: Login Page

Once registered, visit the `/login` page to log in. If you are a returning user, this will be the first page you encounter when running the program.

## Step 5: Home Page

After logging in, you will be redirected to the home page, where you can find all your orders. If you don't have any orders yet, you will see a notification informing you that there are no orders to display.

## Step 6: Add Order

To add a new order, visit the `/addorder` page or click the `Add Order` button on the sidebar.

## Step 7: Logout

To log out, click on the profile button at the bottom left of the sidebar. There, you will find a logout button to end your session.

Thank you for using QShare! If you encounter any issues or have any questions, please feel free to reach out for support. Enjoy managing your orders with ease!
