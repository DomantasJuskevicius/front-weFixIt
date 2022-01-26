import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {
  Header,
  Table,
  SvgsContainer,
  EditButtons,
  SingleUnitContainer,
} from "../Auth/Styles";
import {
  deleteRequest,
  editRequest,
  isButtonActive,
  parseJwt,
} from "../../../utils/functions";
import styled from "styled-components";
import { CreateCategory } from "./AddCategory";
import { EditCategory } from "./EditCategory";
import { ReactComponent as EditSvg } from "../../../images/edit-pencil.svg";
import { ReactComponent as DeleteSvg } from "../../../images/delete-trashbin.svg";
import { ReactComponent as ArrowSvg } from "../../../images/arrow-right.svg";
import { ReactComponent as ConfirmSvg } from "../../../images/confirm.svg";
import { ReactComponent as CancelSvg } from "../../../images/cancel.svg";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const CategoryTopContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Category = () => {
  const [categories, setCategories] = useState();

  const cookies = new Cookies();
  let jwtToken = cookies.get("jwt");
  const userData = jwtToken ? parseJwt(jwtToken) : null;
  const [editedData, setEditedData] = useState({ title: "" });
  const [editClicked, setEditClicked] = useState({ value: false, index: null });

  useEffect(() => {
    const get = async () =>
      axios
        .get(`https://db-wefixit.herokuapp.com/api/categories`)
        .then((res) => setCategories(res.data.categories));
    get();
  }, []);

  return (
    <CategoryContainer>
      <CategoryTopContainer>
        <Header>Categories</Header>
        {userData && userData.role === "1" && <CreateCategory jwt={jwtToken} />}
      </CategoryTopContainer>
      <Table>
        {categories &&
          categories.map((category, index) => (
            <SingleUnitContainer key={index}>
              <Link
                to={editClicked.value ? "#" : `/Category/${category.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <EditCategory
                  title={category.title}
                  description={category.description}
                  editClicked={editClicked}
                  index={index}
                  setEditedData={setEditedData}
                />
              </Link>
              <SvgsContainer>
                {editClicked.value && editClicked.index === index ? (
                  <EditButtons>
                    <ConfirmSvg
                      onClick={() =>
                        editRequest(category.id, editedData, 0, jwtToken)
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
                  <>
                    {isButtonActive(category, jwtToken) && (
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
                          onClick={() =>
                            deleteRequest(category.id, 0, jwtToken)
                          }
                        />
                      </EditButtons>
                    )}
                    {!isButtonActive(category, jwtToken) && <ArrowSvg />}
                  </>
                )}
              </SvgsContainer>
            </SingleUnitContainer>
          ))}
      </Table>
    </CategoryContainer>
  );
};

export default Category;
