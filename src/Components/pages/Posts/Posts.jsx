import axios from "axios";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../../utils/functions";
import { Header, Table, SingleUnitContainer } from "../Auth/Styles";

const postURL = axios.create({
  baseURL: "https://db-wefixit.herokuapp.com/api/posts",
});

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    postURL.get().then((res) => {
      setPost(res.data.posts.reverse());
    });
  }, []);

  return (
    <PostContainer>
      <Header>Posts</Header>
      <Table>
        {posts &&
          posts.map((post, index) => {
            return (
              <SingleUnitContainer key={index}>
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/Category/${post.category_id}/${slugify(post.title)}-${
                      post.id
                    }`}
                  >
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                  </Link>
                  <p>author: {post.author_name}</p>
                </div>
              </SingleUnitContainer>
            );
          })}
      </Table>
    </PostContainer>
  );
};
export default Post;
