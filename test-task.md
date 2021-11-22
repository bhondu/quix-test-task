Hello!

Thank you for showing an interest and welcome to our frontend (Angular) technical task. This document contains the requirements set out by our Engineering department to guide you through this stage of our interview process.

## Technical task overview

Create a responsive Angular 9+ or React application which presents the response from a REST API call in an organised way. The application should be usable on at last two device types (mobile and desktop), tablet is a plus.

The project should consist of at least one page: a payment transaction list page which displays all the information received from the API call. You are required to use pagination to display the list of transactions and add an option for filtering the results by transaction status and/or date.


## Before you start

Make sure you have either Java v11 installed or you have Docker set up on your machine. You’ll need it in order to run the server. Regardless of your choice, make sure you start the server on localhost, port 8080. Once successfully started, you’ll have access to the OpenAPI documentation on the following URL: http://localhost:8080/swagger-ui/ (if asked for username and password use the following - username: user, password: userPass). Alternatively, we’ve provided a Postman .json file to help you send requests to the running server and a server-response-page.json file. This will give you an idea of the model classes and the endpoint you have to connect to, but will also let you play around with the endpoint. Keep in mind that when implementing your Angular/React application, you’ll need basic authentication (user:userPass) in order to access the endpoint.

You should have received the .jar file and a Dockerfile when receiving this assignment. If this is not the case, please reach out to the recruitment team and they’ll be able to assist you.


## Requirements

Your Angular application should adhere to the following guidelines:
 - [x] 1\. The language used must be Typescript
 - [x] 2\. The application should be an Angular or React application
 - [x] 3\. Use the stylesheet language of your choice (SCSS is a plus)
 - [x] 4\. The presentation of the payment transaction list is completely up to you, however it needs to be responsive
 - [x] 5\. Only show 5 transactions per page
 - [x] 6\. All attributes from the Transaction DTO must be displayed
 - [x] 7\. There should be an option to filter by transaction status
 - [x] 8\. In case the filtered list is an empty list an appropriate message is displayed to the user
 - [x] 9\. You’ll need to use API authentication (basic auth) in order to access the data from the endpoint
 - [x] 10\. Use layered architecture
 - [x] 11\. Use the provided Java application (.jar) and Docker file to run the server application and the provided endpoint details to connect to, when implementing the HTTPClient
 - [x] 12\. Include at least one test with your submission


## Advice

Use your natural coding habits and don’t hold back on making the general architecture of the code as sane as possible. We expect functionality first and optics after, however as we all know, our code reflects on us, so bear that in mind.

Feel free to use any open source library, regardless whether it’s a UI kit or for functionality.

We are not expecting you to write extensive tests, however the most important parts of the project should be covered by tests. It’s up to you to decide what type of tests you deem necessary to include and how many.

The styling of the webpage is completely up to you as long as it’s functional. Feel free to use the colour palette from our main website.

There are no limitations to how you achieve the end source code, we will not ask you where it came from. We will however ask everything else about it and might ask you to extend your implementation with new features in the follow-up technical interview stage.


## Submitting your project

Once you are happy with your solution to the above task, please submit it into a git repository of your choice (one to which our recruitment / engineering team will have access to) and let our recruitment team know via email

