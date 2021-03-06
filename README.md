# The Coder's Corner [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A social network for coding enthusiasts. Coder's Corner is a platform for developers and programmers to share resources, communicate with one another, network, post their thoughts on certain topics and issues in programming, and to practice and right their own code. Each user can create their own account that contains their username, email, password, and their links/handles to other websites such sd LinkedIn and Github. With this newly created account the userhas full access to what our site has to offer. The user is first directed to their personal profile which displays their information and posts. By clicking the burger menu in the left hand corner it presents a sliding navigation menu to other pages on the site. "Hackhub" is a community tab where other users can create a post that can be seen by all other users on the site. The "Feed" tab is where users can see the latest news in the development world; complete with a title, description, and link to the full article. "Chat" is Coder's Corner's way of communicating directly with other users on the site. Finally, "Editor" allows the user to write and practine writing code straight from the browser.

## Overview and Technologies

Coder's Corner is a MERN Stack application (MongoDB, Express, React, and Node). The database we decided to use was MongoDB due to the fact that it was the simplest route to take for what we needed in our users and posts. We used Mongoose to create all of our models. Server-side we used a basic express server along with node to create all of our routing and backend functionality. Bycrypt and passport were used to authenticate users and hash passwords. Going into the frontend, all of the site and it's pages are rendered through React. React gave us the ability to track our user (once signed in) with context and send their information throughout the site where needed. With React their comes access to React Router which allowed us to create routes more seemlessly in our frontend to connect users with their desired page/function. The entire project was styled using a frontend React framework called Material UI and was used in creating our UI design and responsive pages.

* **Profile**
  * When the user creates an account their LinkedIn, Github, and Email are stored in the databese; that information is then displayed on the user's designated profile page.
    The user is asigned an avatar icon based on their job title they entered in the sign up field. The user's personal information is displayed on the left, while the posts       that the user writes in "Hackhub" are displayed on the right.
  
* **Hackhub**
  * Hackhub is the place where users can write a post and have it be shown to others in the community. Users have the ability to leave likes on other user's posts. The date       that the post was created is displayed at the bottom of each post and is also how they are sorted (latest posts will appear at the top). Links to other sites can be           posted as well. 
  
* **Feed**
  * Feed uses a third party API called News Cathcer that calls the latest news using a "development" query search parameter. The news headline, the descritpion, and the link     to the full news article are displayed to the user.
 
* **Chat**
  * Chat utitlizes the Socket.io library to enables users to message eachother on a sever and is displayed on a live message board. Users can use this feature on their           personal machines and receive live updates and messaged from other users on the message board.

* **Editor**
  * Editor was created using a package called Code Mirror which allows the browser to have an emulated text editor in the window. our editor is primarilt based around
    Javascript, HTML, and CSS. The three panels are akready linked to one another; so there's no need to add scripts or link tags inside the HTML. When the user writes
    code then the output will be dispplyed on the right if the screen.
    
## Screenshots

![Coder's Corner - Google Chrome 12_13_2020 2_53_46 PM](https://user-images.githubusercontent.com/65383133/102028015-d2ed8880-3d5c-11eb-8e51-01ec3807dd02.png)

![Coder's Corner - Google Chrome 12_13_2020 2_53_54 PM](https://user-images.githubusercontent.com/65383133/102028016-d4b74c00-3d5c-11eb-94de-473803962222.png)

![Coder's Corner - Google Chrome 12_13_2020 2_54_48 PM](https://user-images.githubusercontent.com/65383133/102028019-d719a600-3d5c-11eb-9be6-b37102c1359d.png)

![Coder's Corner - Google Chrome 12_13_2020 2_54_56 PM](https://user-images.githubusercontent.com/65383133/102028022-d97c0000-3d5c-11eb-8819-efa46172dabb.png)

![Coder's Corner - Google Chrome 12_13_2020 2_55_10 PM](https://user-images.githubusercontent.com/65383133/102028025-dc76f080-3d5c-11eb-930a-ed4242428dd9.png)

![Coder's Corner - Google Chrome 12_13_2020 2_55_19 PM](https://user-images.githubusercontent.com/65383133/102028027-e00a7780-3d5c-11eb-92de-b8578caef918.png)

![Coder's Corner - Google Chrome 12_13_2020 2_55_32 PM](https://user-images.githubusercontent.com/65383133/102028030-e1d43b00-3d5c-11eb-9271-adf86bc7e5e0.png)

![Coder's Corner - Google Chrome 12_13_2020 2_55_54 PM](https://user-images.githubusercontent.com/65383133/102028034-e7ca1c00-3d5c-11eb-94d1-1c1f88944055.png)

![Coder's Corner - Google Chrome 12_13_2020 3_03_24 PM](https://user-images.githubusercontent.com/65383133/102028036-eac50c80-3d5c-11eb-9787-3d4004025e05.png)
   
## Deployed Application

  * https://the-coders-corner.herokuapp.com/

## Developers Remarks

  * **Brian Praseuth:** This group project was an absolute pleasure to work on. Being able to use what we've gained throughout the program and apply it to one final project was a lot of fun. Besides the group coding as I whole I took part in completing the profile page and a good amount of the styling using Material UI. The project was definitely a good practice in working with a team on a real world application. My teammates and I collaborated extremely well and we were able to solve any problems as a unit. Definitely the most fun I've had so far and a fantastic way to finish out the program. Excited to take the all the knowledge gained from my team and expand on it in the future! Coder's Corner for the win!
  
  * **Joe Schlick:** This was the best project I've worked on by far. First and foremost the team was an absolute pleasure to work with. I was lucky to be on a team with such skilled coders. It helped deepen my understanding of MERN stack apps immensely.
    My tasks were figuring out authentication, getting posts working on the hackhub, and
  managing the github repo. Before this project I was very intimidated by the MERN stack, and now I feel much more comfortable. Since we coded together I got to be a part of every element. I am grateful for the opportunity to work on this project with these people.
  
  * **Kevin Doh:** This website is easily the most detailed and large-scale project I have worked on up to this point. It was a fun, challenging experience and a true test of applying what I've learned in this course. From designing the front-end in Illustrator, to implementing the Socket.io chat and feed, to coding and debugging the back-end alongside my groupmates over Zoom, it was all very educational and fulfilling. Definitely enjoyed collaborating on this project, and I'll be sure to take the knowledge I've gained here to future apps.
  
  * **David Lindner:** This project was a lot of fun to work on, and I had an awesome team to work with. I was responsible for the majority of the backend on the porject;           creating models, initial file/ route structure. This was the first time that I didn't loathe doing the backend. It was challenging but overall fun, and I had my               teammates to help me out. In the frontend I created the Editor page for writing code in the browser; I am really happy with how that turned out. What I liked most about       this project and working with this team was that I was able to dip my toes in a lot of the code due to the fact that we worked togther for a majority on the project and       were all working on the same thing at once. It allowed us to be very cohesive and not have a lot of issues. All in all, a really good time.
  
## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 Kevin Doh, Joe Schlick, Brian Praseuth, David Lindner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    
    

  
 
