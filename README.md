# Add community features to your HubSpot site
Learn how to add chat, feeds, and files to your site built in HubSpot using Weavy, including pages published as private so you can add community features for your logged-in users.

## Prerequisites
* You need a Weavy account and an environment with API keys
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

## Add chat as a module
* Ensure you're running <code>hs watch</code> in the background so your files are automatically uploaded to your HubSpot site.
* Go to your modules folder and add a new module: <code>hs create module chat</code>, label it Chat
* In the <code>meta.json</code> file, make sure <code>is_available_for_new_content</code> is set to <code>true</code>
* Clear the <code>fields.json</code> file, leave just the brackets
* 
