# Authentication: Add Feeds to your HubSpot CMS for private content

## Prerequisites
* You need a Weavy account (https://get.weavy.io/sign-in) with an environment and an API key
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

## First
* Make sure you follow the steps in the [README.md](/serverless/README.md) for setting up the serverless endpoint

## Get started
> **Note:** Ensure you're running `hs watch` in the background so your files are automatically uploaded to your HubSpot site.
* Start a new Terminal in your IDE (VS Code, etc.)
* Go to your modules folder and add a new module: `hs create module weavy-feeds-auth`, label it `Weavy Feeds (Auth)`
* Select `Page` as the type of content this module will be used in
* Select `N` for is this a global module
* After the folder and files have been created, in the `meta.json` file, make sure `is_available_for_new_content` is set to `true`
* Add the following snippet to your `meta.json` file; this renders a placeholder when in edit mode
```json
  "placeholder" : {
    "show_module_icon" : true,
    "title" : "Feeds",
    "description" : "Placeholder for the Weavy Feeds UI."
  }
```
* Copy the contents of the `fields.json` file into your module
  * We're adding one text field to set a unique ID for the feeds you're creating
  * This field enables you to publish different pages using the same module, but by setting unique app IDs, you can have different feeds on each page
* Copy the contents of the `module.html` file into your module and change the `{ YOUR WEAVY URL}` in the code to the environment URL you have in your Weavy account
  * The code is using the HubL variable `{{ contact.email }}` to get the email of the logged-in user (required)
* Now create a new web page with control audience access for the page set to Private; if you've done everything right, you should see a Weavy Feeds (Auth) module that you can drag and drop into your page, and a feed should be rendered
  * Test to log in and out with different users to see how they interact with each other's posts, etc.
