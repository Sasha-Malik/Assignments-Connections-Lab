# Project 2 : Course Search

Link : https://course-search.glitch.me/ 

## Description
Course search is a real time web application that helps users pick the best courses suited for them. It does so by visualizing the courses based on diferent criteria such as workload, difficulty of exams, grading, content and professor reviews. Users can also post their own text reviews/ post queries as well as submit polls to alter the graphical visualizations.

<br />
<img width="1435" alt="Screen Shot 2022-11-13 at 8 58 20 PM" src="https://user-images.githubusercontent.com/106297572/201534104-6ddaf3e2-2cb9-435c-9868-13917239e60c.png">


## Design 
Our color palattes is composed of shades of purple which matches with the theme of NYU Abu
Dhabi. We seek to create a modern minimalistic design that eases the user to navigate and
explore the website

<br />
<img width="1440" alt="Screen Shot 2022-11-13 at 9 01 58 PM" src="https://user-images.githubusercontent.com/106297572/201534233-e08ddb3a-4681-4c82-965b-7ab3a3863fc6.png">


## User Interaction

Users can rate the course based on difficulty, workload, exams, grading and the professor by submitting a poll. 
Poll Slider is a tool that allows the user to vote on different aspects of the courseb by moving the slider to vote with more precision. This vote gets reflected on the bar graph in real time.

<br />
<img width="1426" alt="Screen Shot 2022-11-13 at 9 04 48 PM" src="https://user-images.githubusercontent.com/106297572/201534463-a046ec21-0ee5-409b-8d1b-1af539492d10.png">

They can see the graphical visualization get altered as soon as the poll is submitted with the updated number of students who submitted the poll.

<br />
<img width="1440" alt="Screen Shot 2022-11-13 at 9 05 00 PM" src="https://user-images.githubusercontent.com/106297572/201534567-ef202091-08d1-4a95-9a5c-badccad25894.png">

Along with this users can also leave an anonymous text review of thier experience with the course / post their queries.

<br />
<img width="1440" alt="Screen Shot 2022-11-13 at 9 06 14 PM" src="https://user-images.githubusercontent.com/106297572/201534574-9db6c732-d0c7-4a97-8e06-a6c723b5991b.png">


## Tools and Technologies
1. HTML,CSS and JS for front-end development
1. NodeJS to create our server and glitch to host our server.
2. Chart.js to draw charts and bar graph in our application.
3. Socket.io for real time data exchange between server and clients.
4. Nedb database to store and retrieve our data.

Socket.io was used so that the comments are displayed in real time, making it streamlined for other users to reply to queries by other users. Meanwhile, get requests are used to fetch the data from the Nedb database when a user initially connects. 


## Idea and Motivation 
1. Tired of scrolling through facebook groups to find reviews for specific courses.
2. Needed a way to visualize course statistics for streamlined decision making.
3. Anynomous comments/reviews so that the users can openly share thier views about the courses/professors.

## Key Challenges

## Next Steps

verification process for logging in


## Avinash

## Sasha
