CREATE DATABASE PROJECT;

USE PROJECT;

CREATE TABLE CLIENT
(
	UST_ID_Num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Client_Last_Name VARCHAR(200) NOT NULL,
    Client_First_Name VARCHAR(200) NOT NULL,
	College_Department_Office VARCHAR(254) NOT NULL,
    Organization_Name VARCHAR(200),
    Client_Address VARCHAR(200),
    Client_Mobile_Number BIGINT NOT NULL,
    Client_Telephone_Fax_Number INT
);

CREATE TABLE EVENT
(
	Event_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title_of_Event VARCHAR(100),
    Kind_of_Event ENUM(
		'Concert', 
        'Fashion Show', 
        'Dance/Party',
        'Lectures',
        'Exhibition',
        'Socials/Reception',
        'Cultural Event',
        'Others'
    ),
    Date_of_Event DATE NOT NULL,
    Time_of_Event TIME NOT NULL,
    Number_of_Participants INT,
    Objectives VARCHAR(254),
    Equipment VARCHAR(254),
    Ingress TIME,
    Egress TIME
);

CREATE TABLE UST_SPACE
(
	Event_ID INT AUTO_INCREMENT,
    Reserved_Date TIMESTAMP DEFAULT NOW(),
    Space_Requested ENUM(
		'Arch of the Centuries',
        'Plaza Benavides',
        'Main Building Lobby',
        'MB Mezzanine Lobby',
        'Grand Staircase',
        'Interior Court(Right Side)',
        'Interior Court(Left Side)'
    ),
    FOREIGN KEY (Event_ID) REFERENCES EVENT (Event_ID)
);

SELECT * FROM CLIENT;
SELECT * FROM EVENT;
SELECT * FROM UST_SPACE;

