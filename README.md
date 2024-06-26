Hello,

I created games-crud.Among others in this project you can add games, which you played and what are you planning to play.  I used mostly react and typescript. Here are steps to open page on your computer:

* Download and install a PostgreSQL server from page www.postgresql.org. Ensure that the installation includes the PostgreSQL Unicode ODBC driver.
* Add the PostgreSQL bin directory path to the PATH environmental variable.
* Open the psql command-line tool. In the Windows Command Prompt or Terminal, run the command: psql -U userName. Enter your password which you created in installation . Usually userName is postgres.
* Run a CREATE DATABASE command to create a new database. For example : CREATE DATABASE games WITH ENCODING 'UTF8'.
* Connect to the new database using the command: \c databaseName.
* You should gave the .env file you need to replace DATABASEURL like in .env.example. Just write your created database, password, user and port if you use another one.
* Remove migrations files and write the command : npx prisma migrate dev –DatabaseName init.



 
