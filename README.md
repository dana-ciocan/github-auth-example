# Github Auth Example

This is a very minimal Next.js repo to show how you can authenticate to Github's OAuth server.

## Create a Github app

<add instructions>

## Set up your `.env` file

You'll need to set up a `.env` file to get this example working.

I've added a `.env.sample` file that you can rename to `.env` and update. 

You will need to add some values from your own Github app, as follows:

```
GITHUB_CLIENT_ID=<your Github app's client ID>
GITHUB_CLIENT_SECRET=<your Github app's client secret>
```

You can find these values by doing the following:

1. Log onto Github
1. Click on your profile icon in the top right-hand corner of the screen
1. Click on the _Settings_ cog in the drop-down menu
1. Click on the very bottom item in the left-hand menu - _Developer Settings_
1. Click on the app you created in the "Create a Github app" step
1. Under the _About_ section, you’ll see an app ID and a client ID - you’ll want to copy these into your .env file

## Running this example

Once you have cloned this repo and created your Github app, you'll want to:

1. Run `nvm use`
1. Run `npm install`
1. Add the client ID for your Github app in the `.env` file
1. Run `npm run dev`
1. Go to http://localhost:3000


