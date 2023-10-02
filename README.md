# Mini Message Board

[Live Demo]()

A simple message board app to practice routing with Express as a project for [The Odin Project's]() Nodejs course.

_This project was initially built during my first run of the The Odin Project as seen in the [old branch](). During my second run, I'm revisiting few projects and this time I chose to use TypeScript as a practice._

## The UI

As a backend oriented project, the ui is fairly simple and unremarkable. As the user visits the page, the user can view all the messages posted by various users and the user can then click on add new message to open a form and add their own message.

## The Backend

The project structure is fairly simple. The _**src**_ folder holds the "Source" files used for development and the _**dist**_ folder holds the files used for deployment. The _**app.ts**_ file is the main file for the server while the ****index.ts**** in the _routes_ folder holds the various routes pertaining to the home page.

## Future Plans

The project lacks a persistent storage, so all data provided by the users will be cleared on server refresh. Although one is supposed to use a database for persisting storage in a webapp, my future plan for this project is to persist all data from the user to a CSV file in the same root directory(no particular reason I just felt it would be fun.)
