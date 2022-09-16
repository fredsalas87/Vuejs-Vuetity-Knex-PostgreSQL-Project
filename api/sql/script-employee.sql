CREATE TABLE employee (
    employee-id uuid PRIMARY KEY NOT NULL uuid_generate_v4();
    name VARCHAR (255) NOT NULL,
    job-role VARCHAR (255) NOT NULL,
    birth DATE NOT NULL,
    employee-registration INTEGER NOT NULL,
)