# Rick and Morty Project

This project is a simple project using the Rick and Morty API with GraphQL. The main reason for this project is to make a characters list and open a detailed screen from characters.

To make this project the following libraries were needed:

#### Expo
#### Expo Router
#### Apollo
#### React Native Elements
#### Zustand

# Folder Structure

### __generated__
An Apollo generated folder, that is used for the query types, you can learn more at https://www.apollographql.com/docs/react/development-testing/static-typing/

### app
This folder is the entry point from the expo router, each file is a route, you can learn more at https://docs.expo.dev/router/create-pages/

### components
This folder is for all components used in this project, this folder is made using the atomic design, you can learn more at https://atomicdesign.bradfrost.com/chapter-2/

### hooks
This folder is to create some custom hooks to use in this project, also make the queries

### screens
This folder is to create the screens needed in the app

### zustand
This folder is to create a global state that can be used in the project

# Running the project

### Step 1
Install dependencies
run `yarn`

### Step 2
Start a development server
run `npx expo start`