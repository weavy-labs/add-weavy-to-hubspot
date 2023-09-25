# Adding serverless function in HubSpot CMS to get access token from Weavy
API Keys should never be shared on the client side, so therefore we need to create a serverless function in HubSpot CMS 

## Overview
This serverless function will communicate with your Weavy API and;
1. Create (or update) a user with first name, last name, and email based on who is logged in
2. Create and init the app (chat, feeds, or file-sharing) and add the user as a member
3. Generate an access token with an expiration of 1 hour and return that as a response

## Get started
> **Note:** Ensure you're running <code>hs watch</code> in the background so your files are automatically uploaded to your HubSpot site.

1. In your HubSpot root folder, run the command `hs create function weavy-token`
2. Name the folder `weavy-token`
3. Name the JS file `weavy-token`
4. Set the HTTP method to `GET`
5. Set the portion part of the URL to `weavy-token`
6. Copy and paste the code from the `weavy-token.js` file is in this repo
7. Replace `{ YOUR WEAVY URL }` and `{ YOUR WEAVY API KEY }` with the information from your environment in your Weavy account
8. Save


