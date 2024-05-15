# Client-Meet-Management

## Overview
Client-Meet-Management is a comprehensive web application to manage client details and their meeting schedules efficiently.

## Technology Stack
- **Frontend:** Angular, HTML, CSS, TypeScript
- **Backend:** Express.js
- **Database:** MySQL
- **Version Control:** Git, GitHub
- **Project Management & Agile Tool:** Jira Software
- **Behavior Driven Development (BDD) Tool:** Cucumber for Gherkin scenarios

## Database Structure

### Clients Table
To store client information, use the following SQL schema to create the `client` table:
```sql
CREATE TABLE client (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cname VARCHAR(40),
    mail VARCHAR(50),
    address VARCHAR(1000),
    pwd VARCHAR(30)
);
```

### Meetings Table
To record details about the meetings, use the following SQL schema to create the `meet` table:
```sql
CREATE TABLE meet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meetTopic VARCHAR(20),
    numOfPeople INT,
    meetStartTime DATETIME
);
```

## Running the Backend Server
To launch the backend server, navigate to the `/src/` folder and execute the following command:
```terminal
node server.js
```

## Behavior Driven Development (BDD)
BDD is implemented using Cucumber within a Maven project located in the root folder, named `CMMSelenium`.
