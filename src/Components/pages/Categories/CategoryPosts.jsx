import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {
  Table,
  Header,
  SvgsContainer,
  EditButtons,
  SingleUnitContainer,
} from "../Auth/Styles";
import {
  deleteRequest,
  editRequest,
  isButtonActive,
  slugify,
} from "../../../utils/functions";
import styled from "styled-components";
import { CreatePost } from "../Posts/AddPost";
import { ReactComponent as EditSvg } from "../../../images/edit-pencil.svg";
import { ReactComponent as DeleteSvg } from "../../../images/delete-trashbin.svg";
import { ReactComponent as ArrowSvg } from "../../../images/arrow-right.svg";
import { ReactComponent as ConfirmSvg } from "../../../images/confirm.svg";
import { ReactComponent as CancelSvg } from "../../../images/cancel.svg";
import { EditPost } from "../Posts/EditPost";

const cate = axios.create({
  baseURL: "https://db-wefixit.herokuapp.com/api/categories",
});

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 0 40px 0 20px;
    transition: 0.1s ease-in-out;
    min-width: 10px;
    min-height: 16px;
  }
  &:hover {
    svg {
      transform: rotate(30deg);
    }
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryPosts = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [category, setCategory] = useState();
  const [posts, setPosts] = useState({ data: [], isLoading: true });
  const [editedData, setEditedData] = useState({ title: "", content: "" });
  const [editClicked, setEditClicked] = useState({ value: false, index: null });

  const cookies = new Cookies();
  let jwtToken = cookies.get("jwt");

  const getCategoryId = () => {
    const id = pathname.split("/");
    return id.at(-1);
  };
  const categoryID = getCategoryId();
  useEffect(() => {
    cate.get(categoryID + "/posts").then((res) => {
      setCategory(res.data[0][0]);

      setPosts({ data: res.data[1].reverse(), isLoading: false });
    });
  }, [categoryID]);

  return (
    <PostContainer>
      <Header>{category && category.title}</Header>
      {jwtToken && <CreatePost categoryId={categoryID} jwt={jwtToken} />}
      <Table>
        {posts.isLoading === false &&
          posts.data.map((post, index) => (
            <SingleUnitContainer key={index}>
              <Content>
                <div>
                  <span>author: {post.author_name}</span>
                </div>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={
                    editClicked.value
                      ? "#"
                      : `${slugify(post.title)}-${post.id}`
                  }
                >
                  <ArrowContainer>
                    <EditPost
                      title={post.title}
                      content={post.content}
                      index={index}
                      editClicked={editClicked}
                      setEditedData={setEditedData}
                    />
                    <ArrowSvg />
                  </ArrowContainer>
                </Link>
                <SvgsContainer>
                  {editClicked.value && editClicked.index === index ? (
                    <EditButtons>
                      <ConfirmSvg
                        onClick={() =>
                          editRequest(post.id, editedData, 1, jwtToken)
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
                      {isButtonActive(post, jwtToken) && (
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
                            onClick={() => deleteRequest(post.id, 1, jwtToken)}
                          />
                        </EditButtons>
                      )}
                    </div>
                  )}
                </SvgsContainer>
              </Content>
            </SingleUnitContainer>
          ))}
      </Table>
    </PostContainer>
  );
};
export default CategoryPosts;
