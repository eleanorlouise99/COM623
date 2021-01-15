<h1>COM623 Contemporary web application</h1>

<h2>Implementation and report</h2>
<h3>Eleanor Morgan Q14572575</h3>
<p>Link to hosted site: <a href="https://solent-sport.web.app/">https://solent-sport.web.app/</a></p>

<h3>Introduction</h3>
<p>This assesment focuses on building the idea and design created in assesment 1. The idea was to create a web application for 'Sport solent' and it's clubs and societies. 
The problem found was that some students found it hard to keep up with when and where events (such as training or social) were taking place, and committee members of these
clubs were finding it stressful constantly having to ask round as to who was coming, or repeating dates and times to member who had forgotten. The proposed solution that I
came up with was to develop an application in which each society could have their own area, so that committee members can post details about events and members can find these 
details and respond as to whether or not they would be able to attend or not. Therefore, in the first assigment I had designed a few pages of this application and explained 
how it would be able to solve the problem I had discovered. In this assesment, I have built a few pages of the application and tested it on students to see if it successfully
solved the problem.</p>

<h3>Methodologies</h3>
<p>In assesment 1 I explained how I used the design thinking metholodoloy, which helped me devise the prototype for this application. To summarise the design thionking 
methodology, it involves 5 steps, those being: empathasise, define, ideate, protoype and test. The steps take you through the process of finding a problem, empathesising and 
therefore defining the problem, coming up with ideas for solving said problem, prototyping and bringing the ideas to life, and then testing these ideas out. In the last 
assesment, I mainly focused on the first 3 steps and the development aspect focuses on created a full protoype and testing it out.</p>

<p>For this assesment, as it is a development build, I will be using the <a href="https://zenkit.com/en/blog/agile-methodology-an-overview/#:~:text=Agile%20methodology%20is%20a%20type,functional%20teams%20and%20their%20customers">Agile methodology</a>, however also focusing on the protoype and testing area of the design thinking method 
to carry on from assesment 1. The Agile methodogoly involves 6 steps, these being:
<ol>
<li> A project vision statement, summarising what the goals of the project are.</li>
<li> A project roadmap, coming up with the requirements needed to meet those goals.</li>
<li> A project backlog, a full list of what is needed for the project.</li>
<li> A spring backlog, The user stories (requirements), goals, and tasks linked to the current sprint.</li>
<li> Increment, The working product.</li>
</ol>
I decided on using Agile as after performing some research on it, I figured it was the best for the task as it allows you to go back and adapt to changes if necessary, compared 
to the waterfall method in which each phase is a result of the process of previous steps. It also focuses on the user, it aims to deliver a value rather than just a tech 
component, meaning it allows you to test software after each sprint, so you can gain feedback earlier in the project and adjust changesaccordingly.</p>

<h3>Building the app</h3>
<p>Before setting off on the build, to follow through with the agile method, I began by writing down my goals for this project, which was to develop the user journey I had 
created in assesment one, and a login system for app as well (which I had not designed in assesment 1). I then came up with a project roadmap, which was based off of the design 
I created in assesment 1, I rouhgly sketched out my user flow from signing up to the individiual event page, so that I had a journey to develop. Finally, before building itself 
I created a prject backlog, which consisted of a list of all the pages I needed to build, as well as the components, to help me stay on top of everything and make sure dealines 
are met on time.</p>

<p>I started off by create a new react app which I named 'Solent-sport-app'. I then began by working on the login system, which I did with firebase. This was a struggle for me
and was the most time consuming out of all the areas which is why I worked on it first, however in the end I was able to develop a successful login and sign up system. The only 
issue I encountered here was that ideally, it would only allow you to sign up using a solent email address, however I was not able to develop that. Secondly, I went on to develop the rest of the application, which was broken down into 3 sections after the login, these being the home page, society page and individual event page. I used components to create the individual society cards on the homepage, and used the same components for the event cards on the society page. I also developed a navbar component with a burger
menu function for mobile and smaller screens, this was used with a header image as a hero component among all pages.</p>

<h3>Testing & results</h3>
<p>After I had built my app, I asked 2 of my housemates who are students at Solent (and part of sports teams) to test it out and give their feedback, I asked them to follow the user journey that I had planned out. Firstly, they agreed with me that it would have been better to have only allowed solent email addressed to sign up. They were able to 
understand and find the american football society card and make it to the next step, they liked the homepage, they felt it was very clearly laid out and said they would understand what to do when arriving to that page, without being prompted. When approaching the society page they were confused about the Joinn button and not beign able to clikc it, however were able to move onto the next step (clicking on the event card) without any struggle. Some other feedback they had was to have more information on the individual society page about that club, for example what they do, what kinds of events they host or how often they train. They also would have liked to have been ablke to see who else is going to an event, which was in my design however I struggled to build this part.</p>

<h3>Conclusion</h3>
<p>Overall, I am relatively pleased with my SPA, I found it a challenge to build however I was able to create the user journey I had set out to do. However, it would have bene nice to have added in more functionality with areas, such as the join or sign up (on event page) buttons. I feel that my application did solve the problem I had set out to solve, as it did give students a space in which they could view events going on and see which societies there are, although it would have been good to have been able to click on each societies page and view more details. I was able to keep the build similar to my initial design, it wasnt exactly the same however the steps the user would take remained the constant throughout.</p>


