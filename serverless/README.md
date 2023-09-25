# Adding serverless function in HubSpot CMS to get access token from Weavy
API Keys should never be shared on the client side, so therfor we need to create a serverless function in HubSpot CMS 

## Overview
This serverless function will communicate with your Weavy API and;
1. Create (or update) a user with first name, last name, and email based on who is logged in
2. Create and init the app (chat, feeds, or file-sharing) and add the user as a member
3. Generate an access token with an expiration of 1 hour.

## Get started



