# Gulp starter pack

If you want to work with SASS/SCSS files, you will to use a task runner such as ‘Gulp’ to compile your code in to standard CSS that modern browsers can understand.

In case you are not familiar, this is a task runner which runs on Node js.

It can be used to ‘watch’ the .scss files and detect changes (when we alter the files and save), and automatically compile/minify the code outputting as standard css.

This approach would still not require any changes to your project files.

### Suggested Workflow

## Install

Globally install node - Install node js runtime environment

Globally install Gulp - Use node package manager to install Gulp globally on your machine

---
	npm install –g gulp
---

## Per-project (Intergrate into your project)

1. Clone this repository into your project folder (files - Package.js/gulpfile.js)

-	Package.js
This is a simple ‘json’ file that will be used by node to install the following dependences

-	gulpfile.js
I have pre-defined some ‘tasks’ that continually watch the ‘.scss’ files and detect changes. Once a change is detected, it will automatically compile, minify and output into the css folder.

2 Alter 'src' variables in 'gulpfile.js' to point to your CSS/SCSS folders within your project

3.	Open Command prompt / Terminal (Windows/Mac)

4.	Navigate to site directory 

cd desktop/siteFolder

5.	Install dependences 

npm install 
	
6.	Run gulp

Within cmd/terminal simply call

	gulp


#That’s it .. you can now begin editing the ‘.scss’ files.

Note: 
1.	Minified standard ‘.css’ files should be referenced in the project default master 

2.	When you run ‘npm install’ it will create a ‘node_modules’ folder on your local root folder.

Users should not include this in the project as this is unique to your local environment.

Each user will need to install dependences themselves but these files will be there ready for next time you work on this project.


## Existing projects

	Everything should be installed and configured for this project

1.	Open cmd/terminal and navigate to project directory 
2.	Run gulp – ‘gulp’
