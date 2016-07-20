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

  login(userdata, cb) {
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

        error() {
          console.log("error in SessionApiUtil#login");
        }
      });
    },

    facebookLogin(cb) {
      window.FB.getLoginStatus((response) =>{
        console.log(response.authResponse.signedRequest);
        $.ajax({
            method: "GET",
            url: "/users/auth/facebook/",
            dataType: "json",
            data: {
              app_id: "1790155654560761",
              signed_request: response.authResponse.signedRequest
            },

            success: (res) => {
              console.log(res);
              cb(res);
            },

            error() {
              console.log("error in SessionApiUtil#facebookLogin");
            }
          });
      });

      },

    logout(cb) {
      $.ajax({
          method: "DELETE",
          url: "/users/sign_out.json",
          data: {
            authenticity_token: this.getMetaContent("csrf-token")
          },

          success: (response) => {
            cb(response);
          },

          error() {
            console.log("error in SessionApiUtil#logout");
          }
        });
      }

  };
