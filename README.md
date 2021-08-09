# university
To run the application you need to follow below steps:
=======================================================
npm,node.js,react.js,postgres

Step1: run the below commands to import the database tables.
enter below command to create table:
====================================
CREATE TABLE IF NOT EXISTS universities
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    country text NOT NULL,
    minimum_gpa numeric NOT NULL,
    minimum_gre numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS courses
(
    id SERIAL PRIMARY KEY,
    university_id integer NOT NULL,
    name text NOT NULL,
    teacher_name text NOT NULL
);

copy command to import tabledata from file which i have shared in the email:
===============================================================================
\COPY universities FROM 'location + file_name' DELIMITER ',' CSV HEADER;
\COPY courses FROM 'location + file_name' DELIMITER ',' CSV HEADER;

Step2: Open main folder university\
Step3: Open ui folder in separate terminal or command prompt\
Step4: run command in ui terminal ====>npm install\
Step5: run command in ui ====>npm start (it will launch on 3000 port)\
Step5: Open api folder in separate terminal or command prompt\
Step6: run command in api terminal====>npm install\
Step7: run command in api terminal====>node index.js  (it will launch on 9000 port)

