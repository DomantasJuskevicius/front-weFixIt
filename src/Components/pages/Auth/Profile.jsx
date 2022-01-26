import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Table, Header } from "../Auth/Styles";

const postURL = axios.create({
  baseURL: "https://db-wefixit.herokuapp.com/api/posts",
});

const commentURL = axios.create({
  baseURL: "https://db-wefixit.herokuapp.com/api/comments",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const SingleContainer = styled.div`
  border-bottom: 2px solid #eeeff4;
  padding-left: 20px;
  padding: 20px 0;
  display: flex;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  span {
    text-decoration: none;
    font-size: 18px;
    line-height: 30px;
    color: #18191f;
  }
  a {
    width: 100%;
    &:hover {
      font-weight: 600;
    }
  }
`;

export const Profile = ({ setIsLoggedIn, cookies }) => {
  const [myData, setMe] = useState([]);
  const [posts, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect((config) => {
    axios
      .get("https://db-wefixit.herokuapp.com/api/auth/me", config)
      .then((res) => {
        setMe(res.data);
      });
  }, []);

  useEffect(() => {
    postURL.get().then((res) => {
      setPost(res.data.posts);
    });
  }, []);

  useEffect(() => {
    commentURL.get().then((res) => {
      setComments(res.data.comments);
    });
  }, []);
  return (
    <Container>
      <Table>
        {myData && (
          <div>
            <Header>Hello, {myData.name}</Header>
            <h4>
              Your current role is : 
              {myData.role === "1" ? " Administrator" : " User"}
            </h4>
            <h5>Your current email is : {myData.email}</h5>
            <h5>Your birthday date is : {myData.bdayDate}</h5>
          </div>
        )}
      </Table>
      <Table>
        <Header>Your posts</Header>
        {posts &&
          posts
            .filter((post) => post.user_id === myData.id)
            .map((post, index) => {
              return (
                <SingleContainer key={index}>
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </div>
                </SingleContainer>
              );
            })}
      </Table>
      <Table>
        <Header>Your comments</Header>
        {comments &&
          comments
            .filter((comment) => comment.id === myData.id)
            .map((comment, index) => {
              return (
                <SingleContainer key={index}>
                  <div>
                    <h3>{comment.id}</h3>
                    <p>{comment.comment_text}</p>
                  </div>
                </SingleContainer>
              );
            })}
      </Table>
    </Container>
  );
};
