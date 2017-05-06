# Gulp starter pack

If you want to work with SASS/SCSS files, you will to use a task runner such as ‘Gulp’ to compile your code in to standard CSS that modern browsers can understand.

In case you are not familiar, this is a task runner which runs on Node js.

Before you can use these files, please install Node on your computer:

---
https://nodejs.org/en/
---

Additional Installs

Please install gulp globally via npm

---
	npm install –g gulp
---

Optional - For ease of use, please install git on your computer to enable you to follow our command line instructions:

Windows: https://git-scm.com/download/windows
Mac: https://git-scm.com/download/mac


## Quick info


We will be using gulp to ‘watch’ the .scss files and detect changes (when we alter the files and save), and automatically compile/minify the code outputting as standard css. We will also be minifying our JS.

Please include the minified versions of these files in your project. (You will work and modify the SCSS/un-minified files)

#### Integration guide 

Please open CMD/Terminal and navigate inside your project folder

---
cd projectFolder
---

## Once per project 

1. Clone this repository into your project folder (files - Package.js/gulpfile.js)

---
	git clone https://github.com/simpletut/QuickStartGulp.git . 
---

5.	Install dependences 

---
	npm install
---

3. Run gulp
	
---
	gulp
---

# Done :) 

## Testing

1. Open the default 'scss' file within the projectAssets scss folder
2. edit the file as required 
3. save changes 
4. check the minified css file and inspect changes

## Notes

1. Please ensure you have run gulp within your project folder and it is running at all times whilst you are editing your files


### Existing projects

As you have already installed all the required dependencies, you only need to run gulp within your project folder.
