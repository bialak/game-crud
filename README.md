<h3 align="center">games-crud</h3>
  <p align="center">
    In this project you can create your list of games you want to play or have played
    <br />
    <a href="https://games-to-play.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/bialak/game-crud/issues/new">Report Bug</a>
  </p>
</div>

## About The Project

<img width="1183" alt="Screenshot 2024-10-23 at 22 55 48" src="https://github.com/user-attachments/assets/ff2329d1-61f2-423e-b1bc-a55b1cc3def5">


I created games-crud. Among others in this project you can add games, which you played and what are you planning to play.


### Built With

* ![Javascript][Javacript-logo]
* ![Css][Css-logo]
* [![React][React.js]][React-url]
* [![Typescript][Typescript-logo]][Typescript-url]
* [![Next][Next.js]][Next-url]
* [![Prisma][Prisma-logo]][Prisma-url]
* [![PostgreSQL][PostgreSQL-logo]][PostgreSQL-url]


### Installation

1. Clone the repo
   ```sh
     git clone https://github.com/bialak/games-crud.git 
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Download and install a PostgreSQL server from page www.postgresql.org. Ensure that the installation includes the PostgreSQL Unicode ODBC driver.


   
### Contact

Klaudia Biała - klaudiabiaa@gmail.com

Project Link: https://games-to-play.netlify.app/





* Download and install a PostgreSQL server from page www.postgresql.org. Ensure that the installation includes the PostgreSQL Unicode ODBC driver.
* Add the PostgreSQL bin directory path to the PATH environmental variable.
* Open the psql command-line tool. In the Windows Command Prompt or Terminal, run the command: psql -U userName. Enter your password which you created in installation . Usually userName is postgres.
* Run a CREATE DATABASE command to create a new database. For example : CREATE DATABASE games WITH ENCODING 'UTF8'.
* Connect to the new database using the command: \c databaseName.
* You should gave the .env file you need to replace DATABASEURL like in .env.example. Just write your created database, password, user and port if you use another one.
* Remove migrations files and write the command : npx prisma migrate dev –DatabaseName init.


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Javacript-logo]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Css-logo]: https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white
[Typescript-logo]: https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=TypeScript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Prisma-logo]: https://img.shields.io/badge/prisma-000000?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[PostgreSQL-logo]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/



