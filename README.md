# Add community features to your HubSpot CMS
Learn how to add chat, feeds, and file-sharing to your site built in HubSpot CMS using Weavy, including pages published as private so you can add community features for your signed-in users.

## Prerequisites
* You need a Weavy account (https://get.weavy.io/sign-in) with an environment and an API key
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

## Overview
The repository is segmented into three sections - chat, feeds, and file-sharing. First, you'll be able to get acquainted with the features you can add to your HubSpot CMS by following our onboarding wizards. Second, you'll dive deeper into integrating HubSpot CMS and Weavy to handle signed-in users.

The features from Weavy come to life when you add them to pages in your HubSpot CMS with audience access, creating real-time community features for your users, not just content.

## Modules
Each folder (chat, feeds, file-sharing) contains two folders containing HubSpot CMS modules;
1) **Onboarding:** Getting started with the feature (chat, feeds, or file-sharing) using our onboarding wizard, rendering the feature with a static user.
2) **Authentication:** Create a proper integration between HubSpot CMS and Weavy for access tokens to create a real-time community experience for your signed-in users.

## Serverless function
The serverless function for authentication is needed to integrate HubSpot CMS and Weavy to get access tokens for your signed-in users and can be used by all Weavy features.

## For more information
For more information about Weavy: https://www.weavy.com/docs
For more information about HubSpot CMS: https://developers.hubspot.com/docs/cms

Make sure to join our incredible community and connect with fellow enthusiasts and the Weavy team on Discord: https://www.weavy.com/discord

## Get started with Chat

> **Note:** Ensure you're running <code>hs watch</code> in the background so your files are automatically uploaded to your HubSpot site.

* Go to your modules folder and add a new module: <code>hs create module weavy-chat</code>, label it <code>Weavy Chat</code>
* Select `Page` as the type of content this module be used in
* Select `N` for is this a global module
* After the folder and files have been created; in the <code>meta.json</code> file, make sure <code>is_available_for_new_content</code> is set to <code>true</code>
* Clear the `fields.json` file, leaving just the brackets `[ ]`
* Go to your environment on your Weavy account and initiate the **Get Started with Chat** wizard
* Follow all the steps in the wizard
* In the last step, we're using the CDN version of our JS UI Kit;
* Copy and paste the three code snippets into the `module.html` file
  * Encapsule the first code snippet in `{% require_js position="head" %} ... {% end_require_js %}`
  * Encapsule the last code snippet in `{% require_js position="foot" %} ... {% end_require_js %}`

In the end, your <code>module.html</code> file should look similar to this;
```html
 sdfsdfsdafsasdf
s
dafda
fsda
fsad
f
```
* Now create a new web page, and if you've done everything right, you should see a Wevy Chat module that you can drag and drop into your page and a chat should be rendered
  
