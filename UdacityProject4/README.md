# Project Instructions

The starter code for the project is from Udacity GitHub. It is the same as the starter used in lesson 2. Install and configure Webpack just as it is done in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, An introduction to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a firly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

# Step 1: Getting started

Then, get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet to avoid having extra caches floating around and creating avenue for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Step 2: Setting up the API

The MeaningCloud API is used. You do not need an application_id for it. You can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. 

### Step 3: Require the meaningcloudAPI
Require the meaningcloud in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

- [ ] Require the MeaningCloud npm package
```
var meaningcloud = require("meaningcloud_textapi");
```

#### Step 4: Environment Variables
Next, declare the API keys, which will look something like this:
```
// set meaningcloud API credentias
var meaningcloud = new meaningcloud({
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript

var textapi = new meaningcloud({

  application_key: process.env.API_KEY
});
```

##### Step 5: Using the API

You can check out the documentation of the MeaningCloud API here(https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples). MeaningCloud has several other APIs, which we won’t be using for this project, but feel free to take a look around if you’re curious

## After the MeaningCloud API

Once you are hooked up to the MeaningCloud API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you're in the direction.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. 
- Go back to the web pack config and add the setup for service workers.  
- Test that the site is now available even when you stop your local server 

### Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope to be explain too much about how to do it here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

#### References
Webpack Docs (https://webpack.js.org/loaders/)
Sass basics (https://sass-lang.com/guide)
MeaningCloud API Endpoint Docs (https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1)
Fetch APIS docs (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
Jest Docs(https://jestjs.io/docs/en/getting-started)
Jest Tutorial (https://jestjs.io/docs/en/configuration#snapshotserializers-arraystring)