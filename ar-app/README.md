# FoodAR-App-NativeScript

> Senior design project that allows menu items to be displayed in augmented reality

# File Structure
> Take time to look through the file structure especially the store.  Everything is setup using a module structure please refer to Vue.js docs with any questions.
> You are completely setup when you can run at least one of the build commands below.

# Guidelines for using Github
> Everything requires TWO reviews before being pushed into DEV.  ALWAYS PULL FROM DEV.  Every TWO weeks we will push to master.  

Workflow should be as follows for new tasks:
1) git pull dev or git pull origin dev
2) git checkout -b FAN-<Task Number> -- <Task Description>
3) git add .
4) git commit -m "<nice description of code>"
5) git push (might need git push upstream command *READ YOUR TERMINAL*)
  
# Useful Commands
- git branch (tells you the branch you are on)
- git branch -D <branch name> (deletes branch)
- git clone <url> (clones repo AND PUTS YOU ON MASTER BRANCH)
  
## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```
