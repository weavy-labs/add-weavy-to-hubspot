# Add community features to your HubSpot CMS
Learn how to add chat, feeds, and file-sharing to your site built in HubSpot CMS using Weavy, including pages published as private so you can add community features for your signed-in users.

## Prerequisites
* You need a Weavy account (https://get.weavy.io/sign-in) with an environment and an API key
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

## Overview
The repository is segmented into three sections - chat, feeds, and file-sharing. First, you'll be able to get acquainted with the features you can add to your HubSpot CMS by following our onboarding wizards.

## Authentication
After using our onboarding wizards, we dive deeper and create a proper integration between HubSpot CMS and Weavy.

The features from Weavy come to life when you add them to pages in your HubSpot CMS with audience access. With the Weaavy features, you can create real-time community features for your users, not just content.

We achieve this by adding serverless functions in HubSpot CMS to handle authentication between HubSpot CMS and Weavy.

## How to use this repo
Each folder (chat, feeds, file-sharing) contains two folders containing HubSpot CMS modules.
1) Getting started with the feature (chat, feeds, or file-sharing) using our onboarding wizard
2) Create a proper integration between HubSpot CMS and Weavy for access tokens to create a real community experience for your signed-in users.

## For more information
For more information about Weavy: https://www.weavy.com/docs
For more information about HubSpot CMS: https://developers.hubspot.com/docs/cms

Make sure to join our incredible community and connect with fellow enthusiasts and the Weavy team on Discord: https://www.weavy.com/discord

## Get started with chat
* Ensure you're running <code>hs watch</code> in the background so your files are automatically uploaded to your HubSpot site.
* Go to your modules folder and add a new module: <code>hs create module chat</code>, label it Chat
* In the <code>meta.json</code> file, make sure <code>is_available_for_new_content</code> is set to <code>true</code>
* Clear the <code>fields.json</code> file, leave just the brackets
* Go to your environment on your Weavy account and initiate the **Get Started with Chat** wizard
* Follow all the steps in the wizard
* In the last step, we're using the CDN version of our JS UI Kit
* Copy and paste the three code snippets into the <code>module.html</code> file
  * Encapsule the first code snippet in <code>{% require_js position="head" %} ... {% end_require_js %}</code>
  * Encapsule the last code snippet in <code>{% require_js position="foot" %} ... {% end_require_js %}</code>

In the end, your <code>module.html</code> file should look similar to this;
```html
<!-- Using package from CDN -->
{% require_js position="head" %}
  <script src="https://cdn.jsdelivr.net/npm/@weavy/dropin-js@17.2.1/dist/weavy.js" crossorigin="anonymous"></script>
  <script>
    Weavy.url = "YOUR WEAV URL",
    Weavy.tokenFactory = async () => "YOUR WEAVY USER TOKEN"
  </script>
{% end_require_js %}

<div id="chat-container" style="height:600px;"></div>

{% require_js position="foot" %}
  <script>
      const chat = new Files({ uid: "filesdemo" })
      document.getElementById("chat-container").append(chat);
  </script>
{% end_require_js %}
```
* Now create a new web page, and if you've done everything right, you should see a Chat module that you can drag and drop into your page
