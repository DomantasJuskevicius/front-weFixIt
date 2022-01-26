import React, { useState } from "react";
import Footer from "./index";
import Icon from "../Icons";
import { About } from "../pages/AboutPages/About.jsx";
import { Clients } from "../pages/AboutPages/Clients.jsx";
import { AboutSite } from "../pages/AboutPages/AboutSite.jsx";
export default function FooterContainer() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState(false);
  const [aboutSiteVisible, setAboutSiteVisible] = useState(false);
  return (
    <Footer>
      {aboutVisible && <About setAboutVisible={setAboutVisible} />}
      {clientsVisible && <Clients setClientsVisible={setClientsVisible} />}
      {aboutSiteVisible && <AboutSite setAboutSiteVisible={setAboutSiteVisible} />}
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#" onClick={() => setAboutVisible(true)}>
              Story
            </Footer.Link>
            <Footer.Link href="#" onClick={() => setClientsVisible(true)}>
              Clients
            </Footer.Link>
            <Footer.Link href="#" onClick={() => setAboutSiteVisible(true)}>
              About site
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link
              href="https://www.facebook.com/ktu.lt/"
              target="_blank"
            >
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link
              href="https://www.instagram.com/ktuif/"
              target="_blank"
            >
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link
              href="https://www.youtube.com/channel/UCW6dwTSBsJ7StROHVdzPTQQ"
              target="_blank"
            >
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com/ktuspace" target="_blank">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
