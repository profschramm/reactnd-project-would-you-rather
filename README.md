# Would You Rather Project

This is the second project for Udacity's React & Redux course.  It is a web 
application that lets a verified user play a game : Would you rather.
Users - once logged on - may answer questions, add creations, see the results
on a leaderboard.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.


# TBD Known Deficiencies

1 Make the vote of the user clearer and prettier
2 Add Avatar to NavLink header
3 Modularity: Nav is imported into every Page.  Instead, have one Nav at App.js 
             that is inherited by all the pages. Tried with "nested Routes" but
             was unsuccessful
      Note: I tried following this URL for including a header on every page with "withRouter"  # https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

4 Modify the Store to include the username and avatar as well, to avoid constant lookup

## Dependencies

To get started developing right away:

* clone the Project - `https://github.com/profschramm/reactnd-project-would-you-rather`
* install the dependencies - `npm install`
*    Just in case, you may also have to:
      `npm install react-redux`
      `npm install react-redux-loading`
      `npm install --save semantic-ui-react`
      `npm install --save semantic-ui --only=dev`
                (Alternative (deprecated) npm install --save semantic-ui --dev)
      `npm install prop-types`
      `npm install react-router-dom`
* start the development server with `npm start` 

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
│   └── manifest.json # Tried to modify startURL to ./login
└── src
    ├── actions # Actions
    ├── components # Components
    │   ├── App.js # This is the root of your app.
    |   ├── LoginPage # Front page for logging in
    |   ├── HomePage # Home Page for a logged-in user. Shows a QuestionList
    |                # of either unanswered or answered questions, within a QuestionContainer, made up of QuestionPreview's
    |   ├── QuestionPage # Secondary page for answering a question
    |   ├── QuestionAnswerPage # Secondary page for seeing the answers to a question
    |   ├── NewQuestionPage # Secondary page for creating a new question
    |   ├── LeaderboardPage # Secondary page for seeing the leaderboard of all users
    |   ├── Nav #     
    ├── reducers # Reducers
    ├── utils # Accessing the back-end data
    │   ├── _DATA.js
    │   ├── api.js   
        ├── helpers.js  # Helper functions for manipulating the data structures
    ├── reducers # Reducers
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
