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
    // googleLogin(cb,failure){
    //   $.ajax({
    //     type:"GET",
    //     url:"users/auth/google_oauth2/",
    //     success: (data) =>{
    //       console.log(data);
    //     },
    //     failure: (data) =>{
    //       console.log(data);
    //     }
    //   });
    // },

    googleLogin(cb, failure) {
      window.gapi.auth.authorize({
        immediate: true,
        response_type: 'code',
        cookie_policy: 'single_host_origin',
        client_id: '103867363030-iq1ait30ssbtobrqhcmugffnjgvsok9d.apps.googleusercontent.com',
        scope: 'email profile'
      }, function(response) {
          if(response && !response.error){
            $.ajax({
              type: 'POST',
              url: "users/auth/google_oauth2/callback",
              data: response,
              success: (data) =>{
                console.log(response);
                console.log("success");
                console.log(data);
              },
              error: (data) =>{
                console.log("error");
                console.log(data);
              }
            });
          }
          else{
            console.log("something else happened");
            console.log(response);
          }

      });
    },
    facebookLogin(cb){
      $.ajax({
        method: "POST",
        url: "/users/auth/facebook",
        data: { authenticity_token: this.getMetaContent("csrf-token"),
                app_id: 1790155654560761},
        success: (res) =>{
          console.log(res);
          cb(res);
        }
      });
    },

    // facebookLogin(cb){
    //   debugger
    //   window.fbAsyncInit = function() {
    //           // init the FB JS SDK
    //           FB.init({
    //               appId      : '1790155654560761', // App ID from the App Dashboard
    //               channelUrl : '//localhost:3000/channel.html', // Channel File for x-domain communication
    //               status     : true, // check the login status upon init?
    //               cookie     : true, // set sessions cookies to allow your server to access the session?
    //               xfbml      : true  // parse XFBML tags on this page?
    //           });
    //
    //           // Additional initialization code such as adding Event Listeners goes here
    //
    //       };
    //       debugger
    //       (function(d, debug){
    //           var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    //           if (d.getElementById(id)) {return;}
    //           js = d.createElement('script'); js.id = id; js.async = true;
    //           js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
    //           ref.parentNode.insertBefore(js, ref);
    //       }(document, /*debug*/ false));
    //       debugger
    //       $(function() {
    //           $('#facebook-connect').click(function(e) {
    //               e.preventDefault();
    //
    //               FB.login(function(response) {
    //                 debugger
    //                   if (response.authResponse) {
    //                       // since we have cookies enabled, this request will allow omniauth to parse
    //                       // out the auth code from the signed request in the fbsr_XXX cookie
    //                       $.getJSON('<%=user_omniauth_callback_path(:facebook)%>', function(data) {
    //                           // 'data' contains a 'user' object with 'email' and 'name' in it.
    //                           console.log(data);
    //                       });
    //                   }
    //               }, { scope: 'name, email' });
    //           });
    //       });
    // },


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
            failure(response.responseText);
          }
        });
      }

  };
