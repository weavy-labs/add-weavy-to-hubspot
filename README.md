# Add community features to your HubSpot site
Learn how to add chat, feeds, and files to your site built in HubSpot using Weavy, including pages published as private so you can add community features for your logged-in users.

## Prerequisites
* Your Weavy account (https://get.weavy.io/sign-in) with an environment and an API key
* HubSpot CLI configured (https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
* For private content and/or SSO, see https://knowledge.hubspot.com/website-pages/require-member-registration-to-access-private-content and https://knowledge.hubspot.com/website-pages/set-up-single-sign-on-sso-to-access-private-content

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
