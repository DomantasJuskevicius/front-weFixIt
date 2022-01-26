import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {
  Table,
  Header,
  Para,
  SvgsContainer,
  EditButtons,
} from "../Auth/Styles";
import {
  deleteRequest,
  editRequest,
  isButtonActive,
  parseJwt,
} from "../../../utils/functions";
import styled from "styled-components";
import { CreateComment } from "../Comments/AddComment";
import { EditComment } from "../Comments/EditComment";
import { ReactComponent as EditSvg } from "../../../images/edit-pencil.svg";
import { ReactComponent as DeleteSvg } from "../../../images/delete-trashbin.svg";
import { ReactComponent as ConfirmSvg } from "../../../images/confirm.svg";
import { ReactComponent as CancelSvg } from "../../../images/cancel.svg";

const cate = axios.create({
  baseURL: "https://db-wefixit.herokuapp.com/api/posts",
});

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Span = styled.span`
  align-items: top;
  text-align: top;
  align: center;
  font-weight: 350;
  font-size: 15px;
`;

const Post = () => {
  const location = useLocation();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState({ data: [], isLoading: true });
  const [editedData, setEditedData] = useState({ comment_text: "" });
  const [editClicked, setEditClicked] = useState({ value: false, index: null });

  const cookies = new Cookies();
  let jwtToken = cookies.get("jwt");
  const userData = jwtToken ? parseJwt(jwtToken) : null;

  const getPostId = () => {
    const id = location.pathname.split("/").toString().split("-");
    return id.at(-1);
  };

  const postID = getPostId();
  useEffect(() => {
    cate.get(postID + "/comments").then((res) => {
      setPost(res.data[0][0]);
      setComments({ data: res.data[1], isLoading: false });
    });
  }, [postID]);

  return (
    <PostContainer>
      <Table>
        <Span>Post author: {post && post.author_name}</Span>
        <Header>{post && post.title}</Header>
        <Para>{post && post.content}</Para>
      </Table>
      <Table>
        {comments &&
          comments.data.map((comment, index) => (
            <div key={index}>
              <Span>Comment author: {comment.author}</Span>
              <EditComment
                comment_text={comment.comment_text}
                index={index}
                editClicked={editClicked}
                setEditedData={setEditedData}
              />
              <SvgsContainer>
                {editClicked.value && editClicked.index === index ? (
                  <EditButtons>
                    <ConfirmSvg
                      onClick={() =>
                        editRequest(comment.id, editedData, 2, jwtToken)
                      }
                    />
                    <CancelSvg
                      onClick={() =>
                        setEditClicked({
                          value: false,
                          index: null,
                        })
                      }
                    />
                  </EditButtons>
                ) : (
                  <div>
                    {isButtonActive(comment, jwtToken) && (
                      <EditButtons>
                        <EditSvg
                          onClick={() =>
                            setEditClicked({
                              value: true,
                              index: index,
                            })
                          }
                        />
                        <DeleteSvg
                          onClick={() => deleteRequest(comment.id, 2, jwtToken)}
                        />
                      </EditButtons>
                    )}{" "}
                  </div>
                )}
              </SvgsContainer>
            </div>
          ))}
      </Table>
      {jwtToken && (
        <CreateComment
          postId={postID}
          jwt={jwtToken}
          userName={userData.username}
        />
      )}
    </PostContainer>
  );
};
export default Post;
