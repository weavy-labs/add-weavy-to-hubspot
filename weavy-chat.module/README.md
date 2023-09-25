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
* Make sure to encapsulate the first code snippet in `{% require_js position="head" %} ... {% end_require_js %}` to place this snippet in the `<head>` tag.
* Make sure to encapsulete the last code snippet in `{% require_js position="foot" %} ... {% end_require_js %}` to place this script tag just before the closing `</body>` tag.

In the end, your <code>module.html</code> file should look similar to this;
```html
<!-- module html  -->
{% require_js position="head" %}
<script src="https://cdn.jsdelivr.net/npm/@weavy/dropin-js@17.2.1/dist/weavy.js" crossorigin="anonymous"></script>
<script>
  // url to your Weavy environment
  Weavy.url = "https://86eeca5ba49343fe811d5c5242dc74b9.weavy.io";
  // token factory that returns the access_token for your demo user
  Weavy.tokenFactory = async () => "wyu_WGFbxsKHigQuKZ4BWZVWFA5MY1IhTj3bYNsy";
</script>
{% end_require_js %}

<div id="chat-container" style="height:600px;"></div>

{% require_js position="foot" %}
<script>
    const chat = new Chat({ uid: "demochat" });
    document.getElementById("chat-container").append(chat);
</script>
{% end_require_js %}
```
* Now create a new web page, and if you've done everything right, you should see a Wevy Chat module that you can drag and drop into your page and a chat should be rendered
