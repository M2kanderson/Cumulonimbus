// Devise with React

module.exports = {
  getMetaContent(name) {
    var metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") === name) {
        return metas[i].getAttribute("content");
      }
    }

    return "";
  },

  login(userdata, cb, failure) {
    $.ajax({
        method: "POST",
        url: "/users/sign_in.json",
        data: {
          user: {
            email: userdata.email,
            password: userdata.password
          },
          authenticity_token: this.getMetaContent("csrf-token")
        },

        success: (response) => {
          cb(response);
        },

        error(response) {
          failure("login", JSON.parse(response.responseText).error);
        }
      });
    },

    googleLogin(cb, failure) {
      window.gapi.auth.authorize({
        immediate: false,
        response_type: 'code',
        cookie_policy: 'single_host_origin',
        client_id: '103867363030-iq1ait30ssbtobrqhcmugffnjgvsok9d.apps.googleusercontent.com',
        scope: 'email profile'
      }, function(response) {
        if(response){
          if(response && !response.error){
            $.ajax({
              type: 'POST',
              url: "users/auth/google_oauth2/callback",
              data: response,
              success: (data) =>{
                console.log(data);
              }
            });
          }
          else{
            console.log("something else happened");
          }
        }
      });
      },

    facebookLogin(cb) {
      window.FB.getLoginStatus((response) =>{
        // console.log(response);
        if(!response.authResponse){
          window.FB.login((resp) =>{
            $.ajax({
                method: "POST",
                url: "/users/auth/facebook/callback",
                dataType: "json",
                data: {
                  app_id: "1790155654560761",
                  signed_request: resp.authResponse.signedRequest,
                  authenticity_token: this.getMetaContent("csrf-token")
                },

                success: (res) => {
                  console.log(res);
                  cb(res);
                },

                error() {
                  console.log("error in SessionApiUtil#facebookLogin");
                }
              });
          }, {scope: 'email'});
        }

      });

      },

    logout(cb, failure) {
      $.ajax({
          method: "DELETE",
          url: "/users/sign_out.json",
          data: {
            authenticity_token: this.getMetaContent("csrf-token")
          },

          success: (response) => {
            cb(response);
          },

          error(response) {
            failure(JSON.parse(response.responseText).error);
          }
        });
      }

  };
