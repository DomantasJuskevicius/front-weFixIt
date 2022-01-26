import { useEffect } from "react";
import Cookies from "universal-cookie/es6";

export const LoginAPI = (props) => {
  const url = "https://db-wefixit.herokuapp.com/api/auth/login";
  useEffect((cookies) => {
    cookies = new Cookies();
    if (props.APIDetailsLogin.email.length > 0) {
      let formData = new FormData();

      formData.append("email", props.APIDetailsLogin.email);
      formData.append("password", props.APIDetailsLogin.password);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data["access_token"]) {
            let d = new Date();
            d.setMinutes(d.getMinutes() + data["expires_in"] / 60);
            cookies.set("jwt", data["access_token"], {
              expires: d,
            });
            props.setLoading(false);
            props.setIsLoggedIn(true);
            window.location.reload();
          } else {
            props.setLoading(false);
            props.setServerMessage(data["error"]);
          }
        });
    }
  }, [props]);

  return null;
};