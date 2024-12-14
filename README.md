# Github Auth Example

This is a very minimal Next.js repo to show how you can authenticate to Github's OAuth server. It is the companion repo for a blog article I am currently writing on OAuth - feel free to [check out my blog](https://www.danaciocan.com) if you are interested in all things software engineering!

Follow the instructions in this README to get set up and run this example locally.

## Create a Github app

To get this example to work, you'll need to create your own version of a Github app - unfortunately I can't lend you mine, so you'll have to follow these steps:

1. Log onto Github
1. Click on your profile icon in the top right-hand corner of the screen
1. Click on the _Settings_ cog in the drop-down menu
1. Click on the very bottom item in the left-hand menu - _Developer Settings_
1. Click on the _New Github app_ button in the top right-hand corner
1. Fill in the details of your app - because you'll be developing on your local machine using Next.js, use http://localhost:3000
1. By default, webhooks are enabled, but you can switch this off
1. Hit the green _Create Github app_ button

You're all done - on to the next section!

## Set up your `.env` file

Now that you've got your Github app all set up, you'll need to create a `.env` file.

I've added a `.env.sample` file that you can rename to `.env` and update. 

You will need to add some values from your own Github app, as follows:

```
GITHUB_CLIENT_ID=<your Github app's client ID>
GITHUB_CLIENT_SECRET=<your Github app's client secret>
```

If you've still got your Github app open from the last step, that's great, you can get these values from there.

If not, you can find these values again by doing the following:

1. Log onto Github
1. Click on your profile icon in the top right-hand corner of the screen
1. Click on the _Settings_ cog in the drop-down menu
1. Click on the very bottom item in the left-hand menu - _Developer Settings_
1. Click on the app you created in the "Create a Github app" step
1. Under the _About_ section, you’ll see an app ID and a client ID - you’ll want to copy these into your .env file

## Running this example

Once you have cloned this repo and created your Github app, you'll want to:

1. Run `nvm use` to use the right version of Node (just to avoid any awkwardness)
1. Run `npm install` to install all dependencies
1. Run `npm run dev` to run the Next.js dev server
1. Go to http://localhost:3000 to run the example
1. Click on the _Login with Github_ button that appears
1. If you're not already logged into Github, you'll get sent to a login page, if you are, you'll get pinged straight back to our callback URL

Notice the `?code=` query parameter in the callback URL. This is the first step in the authentication process - we send the user (in this case us, but in Production this would be the users of your app) off to log in and we get given a code. We then exchange this for an _access token_.

If everything worked, you should see the access token being displayed on the callback URL page - it'll start with `ghu_`. This is like our hotel key and is what would give us access to github repos and other useful information that we can use in our app!