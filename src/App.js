import React from "react";
import Cookies from "universal-cookie/es6";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Category from "./Components/pages/Categories/Category";
import CategoryPosts from "./Components/pages/Categories/CategoryPosts.jsx";
import Navbar from "./Components/Navbar/index";
import FooterContainer from "./Components/Footer/footer";
import Post from "./Components/pages/Posts/Post";
import Posts from "./Components/pages/Posts/Posts";
import { MyProfile } from "./Components/pages/Auth/MyProfile";

const cookies = new Cookies();
let jwtToken = cookies.get("jwt") ? cookies.get("jwt") : null;
axios.defaults.headers.common = {
  Authorization: "Bearer " + jwtToken,
};

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Post" element={<Posts />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Category/:id" element={<CategoryPosts />} />
          <Route path="/Category/:id/:id" element={<Post />} />
        </Switch>
        <FooterContainer />
      </Router>
    </Container>
  );
};

const Container = styled.div`
  background: #aec6cf;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
`;

export default App;
