# Project 1 : Personality Compatibility Test
Link : https://sasha-malik.github.io/Assignments-Connections-Lab/Assignment4/

<img width="1434" alt="Screen Shot 2022-09-30 at 7 03 08 PM" src="https://user-images.githubusercontent.com/106297572/193299641-cc9b5f9c-fb39-45a9-8ad9-758c88b01696.png">

## Description

This project allows the users to test their compatibility with a friend based on their respective personalities. The personalities are obtained by answering a short 10 minute questionnaire, after which each user can see their personalities (based on the 16 personality distribution) as well as their compatibility with each other.
The project incorporates p5.js to visualise the orbs (one for each person) and their compatibility. The responses for the questionnaire come from a json file obtained using js fetch() from Sentino API.


## User Interaction

The users fill their respective forms and upon completion click submit to view the results.

<img width="1440" alt="Screen Shot 2022-09-30 at 7 14 18 PM" src="https://user-images.githubusercontent.com/106297572/193301943-a9233633-10e8-4433-af26-49a0ba7a2ebd.png">

<br/>
<br/>

Upon submitting the users can view the two orbs and their compatibility based on the distance between the orbs, if the orbs come closer to each other if the users have a highly compatible personality and the results show up and the orbs go further away if the personality is moderately compatible.

<br/>

<img width="1440" alt="Screen Shot 2022-09-30 at 7 21 08 PM" src="https://user-images.githubusercontent.com/106297572/193303247-dd5e11e6-0fb4-47d3-ba4d-7395eed98e4a.png">

<br/>
<br/>

Upon scrolling the users can see their personality results (their respective personality types), they can also click on the link below to know more
about the personality types from the 16Personality website.

<br/>

<img width="1440" alt="Screen Shot 2022-09-30 at 7 21 32 PM" src="https://user-images.githubusercontent.com/106297572/193303263-6f626883-9f20-4c24-af0b-a87c8f0012fd.png">

## Key Challenges

1. Checking if both the users have submitted their forms before changing the sketch using check1 and check2. Also having a checkBreak to make sure submitting more than onve doesn't change the visualisation (without clicking on reset). Traversing hightCompatibility1 array (array of personalities which have a high compatibility) in O(n) time to see if both people belong to it or not. To do this a count variable kept track to check if both people belonged to the array or not.


<img width="841" alt="Screen Shot 2022-09-30 at 7 33 18 PM" src="https://user-images.githubusercontent.com/106297572/193305627-b800abc8-c5ea-45c0-aa8e-01fc6f327bdb.png">

2. It took a considerable amount of time to find a personality API which used a questionnaire. The API stopped working after some days, it was pretty challenging to look for solutions / a different API which took time away from the working of the project.

3. Loading the response questionnaire in the respective forms.

<img width="543" alt="Screen Shot 2022-09-30 at 7 45 25 PM" src="https://user-images.githubusercontent.com/106297572/193308115-0e79d103-3450-4f54-9e85-a04e1839cfd2.png">

## Next Steps

1. Making the webpage to include more number of users at a time, so that all users can come in the same visualization to gain insights in their compatibility with respect to the other users. Each time a user submits the form an orb would get added in the visualization with an appropriately calculated distance to the other orbs.

2. Making the post part of the API (Sentino) work to get accurate results of the users personality type.

3.A instructions page explaining the working of the web application and enhanced user interface for the visualisation (a bar scale to measure relative compatibilities).


