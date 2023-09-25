# Onboarding: Add Feeds to your HubSpot CMS

## Prerequisites
* You need a Weavy account (https://get.weavy.io/sign-in) with an environment and an API key
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

## Get started with Feeds
> **Note:** Ensure you're running <code>hs watch</code> in the background so your files are automatically uploaded to your HubSpot site.
* Start a new Terminal in your IDE (VS Code, etc.)
* Go to your modules folder and add a new module: <code>hs create module weavy-feeds</code>, label it <code>Weavy Feeds</code>
* Select `Page` as the type of content this module will be used in
* Select `N` for is this a global module
* After the folder and files have been created; in the <code>meta.json</code> file, make sure <code>is_available_for_new_content</code> is set to <code>true</code>
* Clear the `fields.json` file, leaving just the brackets `[ ]`
* Go to your environment on your Weavy account and initiate the **Get Started with Feeds** wizard
* Follow all the steps in the wizard
* In the last step, we're using the CDN version of our JS UI Kit;
* Copy and paste the three code snippets into the `module.html` file
* Make sure to encapsulate the first code snippet in `{% require_js position="head" %} ... {% end_require_js %}` to place this snippet in the `<head>` tag.
* Make sure to encapsulete the last code snippet in `{% require_js position="foot" %} ... {% end_require_js %}` to place this script tag just before the closing `</body>` tag.

In the end, your <code>module.html</code> file should look similar to this;
```html
<!-- module html  -->
{% require_js position="head" %}
<script src="https://cdn.jsdelivr.net/npm/@weavy/dropin-js@17.2.1/dist/weavy.js" crossorigin="anonymous"></script>
<script>
  // url to your Weavy environment
  Weavy.url = "{ YOUR WEAVY URL }";
  // token factory that returns the access_token for your demo user
  Weavy.tokenFactory = async () => "{ YOUR ACCESS TOKEN }";
</script>
{% end_require_js %}

<div id="feeds-container" style="height:600px;"></div>

{% require_js position="foot" %}
<script>
    const feeds = new Posts({ uid: "demofeeds" });
    document.getElementById("feeds-container").append(feeds);
</script>
{% end_require_js %}
```
* Now create a new web page, and if you've done everything right, you should see a Wevy Chat module that you can drag and drop into your page, and a chat should be rendered

> You can use the files in this folder as a reference - your files after creating your module and copying the code snippets to your module should look the same
