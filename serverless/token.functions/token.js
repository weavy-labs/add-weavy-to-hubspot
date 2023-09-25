
// Get your WEVAY_URL and WEAVY_API from your Weavy account
const WEAVY_URL = 'https://c87099a83e8a46d4b95612ece3c60433.weavy.io';
const WEAVY_API = 'wys_gN0rfIgQ46NmECIxG4hcTMI3av9wxm1Cabqu';

// Function to get a user token, expires in 3600 seconds.
function getUserToken (userUid)  {
  let tokenPromise = fetch (WEAVY_URL + '/api/users/' + userUid + '/tokens', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + WEAVY_API
    }
  });

  return tokenPromise;
}

// Function to init the app we want to create - chat, feeds or files - and add the user as a member to the app.
function initApp(userUid, appType, appID) {
  let app = fetch (WEAVY_URL + '/api/apps/init', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + WEAVY_API
    },
    body: JSON.stringify({
      app : {
        uid : appID,
        type : appType
      },
      user : {
        uid : userUid
      }
    })
  });
  return app;
}

// Main function
exports.main = (context, sendResponse) => {

  // Fetch the params to create / update the user
  let userUid = String(context.params.uid).trim();;
  let userfirstName = String(context.params.firstname).trim();
  let userlastName = String(context.params.lastname).trim();
  let useremail = String(context.params.email).trim();

  // App type and UID for the app we want to create
  let appType = String(context.params.apptype).trim();
  let appID = String(context.params.appid).trim();

  // Fetch our wyToken cookie
  let wyToken =  String(context.headers.Cookie)?.split("; ").find((row) => row.startsWith("wytoken="))?.split("=")[1];

  // If our wyToken cookie is empty, we need set it for the first time and create / update user.
  if (userUid != null && wyToken == null) {

    // Using the PUT method to update the user, if the user doesn't exist it will be created.
    let user = fetch (WEAVY_URL + '/api/users/' + userUid, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + WEAVY_API
      },
      body: JSON.stringify({
        name : userfirstName + ' ' + userlastName,
        given_name : userfirstName,
        family_name : userlastName,
        email : useremail
      })
    });

    user.then((response) => {

      // Init the app and add the user as a member
      let app =  initApp(userUid, appType, appID);
      app.then((response) => {

        // Get user token
        let tokenPromise = getUserToken(userUid);
        tokenPromise.then((response) => {
          const jsonPromise = response.json();
          jsonPromise.then((json) => {
            sendResponse(
              {
                body : json.access_token,
                statusCode : 200,
                headers : {
                  // Set the wyToken cookie, we don't want to refresh our token for every call
                  'Set-Cookie': 'wytoken=' + json.access_token + '; Path=/; Max-Age=2592000;'
                }
              }
            );
          });
        });
      });
    });
  } else {
    if (userUid == null) {
      sendResponse({body: 'No UID passed', statusCode: 400});
    } else {
      let app =  initApp(userUid, appType, appID);
      app.then((response) => {
        if(response.status==200) {
          sendResponse(
            {
              body : wyToken,
              statusCode : 200
            }
          );
        } else {
          // If response is not 200 - the token has expired and we need to get a new.
          let tokenPromise = getUserToken(userUid);
          tokenPromise.then((response) => {
            const jsonPromise = response.json();
            jsonPromise.then((json) => {
              sendResponse(
                {
                  body : json.access_token,
                  statusCode : 200,
                  headers : {
                    'Set-Cookie': 'wytoken=' + json.access_token + '; Path=/; Max-Age=2592000;'
                  }
                }
              );
            });
          });
        }
      });
    }
  } 
};