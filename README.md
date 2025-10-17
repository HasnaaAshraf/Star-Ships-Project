
Starships Project :

This project is built using Angular, Bootstrap, and .NET Core Web API.
It connects the frontend and backend to display Star starships data fetched from the public SWAPI API.

The frontend allows users to:

View a list of starships in responsive cards
Search by name
Navigate between pages using Next and Previous buttons
Click on any card to open a detailed page showing more information about the selected starship

The backend (built with ASP.NET Core) handles API requests, processes the data, and sends it to the frontend in a clean, structured way.
I also added error handling and loading states for a smooth user experience.

How to Run the Project

Backend

Open the backend folder in Visual Studio.
Run the API (it will start on https://localhost:7073/swagger/index.html).

Frontend

Open the Angular folder in your code editor.
Run these commands:

npm install
ng serve -o

The app will open automatically in your browser at http://localhost:4200
