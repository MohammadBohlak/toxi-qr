import { AiOutlineSearch } from "react-icons/ai";
// src/components/Archive/ArchiveSection.jsx
import { useState } from "react";
import { Form, InputGroup, Button, Table } from "react-bootstrap";
import { archiveData } from "../../../pages/ourBlog/data";
import { SmallText, SubTitle } from "../../common/texts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledInputGroup = styled(InputGroup)`
  input,
  button {
    font-size: 16px;
    height: 33px;
  }
  input:focus {
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    overflow-y: hidden;
    &:hover {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      > div {
        transform: translateY(-61%);
      }
    }
    &:active,
    &:focus {
      background-color: #fff !important;
      color: ${({ theme }) => theme.colors.primary} !important;
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      height: 66px;
      transition: transform 0.3s;
      svg {
        font-size: 24px;
      }
    }
  }
`;
const ArchiveSkeleton = styled.div`
  /* width: 300px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
const ContentSceleton = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const SearchSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
const ArchiveSection = () => {
  const [query, setQuery] = useState("");
  const showLoader = useSelector((state) => state.loader.isLoading);
  // filter by month name
  const filtered = archiveData.filter((item) =>
    item.month.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {showLoader ? (
        <ArchiveSkeleton>
          <SearchSkeleton>
            <ContentSceleton style={{ width: "75%" }} className="skeleton" />
            <ContentSceleton style={{ width: "24%" }} className="skeleton" />
          </SearchSkeleton>
          <ContentSceleton
            style={{ height: "30px", width: "30%", marginBottom: "10px" }}
            className="skeleton"
          />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
            <ContentSceleton key={i} className="skeleton" />
          ))}
        </ArchiveSkeleton>
      ) : (
        <section>
          <StyledInputGroup>
            <Form.Control
              placeholder="Find a post"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={() => {}}>
              <div>
                <span>Search</span>
                <AiOutlineSearch />
              </div>
            </Button>
          </StyledInputGroup>

          <SubTitle className="mt-4 mb-4">Archive</SubTitle>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>
                  <SmallText>Month</SmallText>
                </th>
                <th>
                  <SmallText $align="center">Posts</SmallText>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <SmallText>
                      {" "}
                      <Link className="text-decoration-none">{item.month}</Link>
                    </SmallText>
                  </td>
                  <td>
                    <SmallText $align="center">{item.posts}</SmallText>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      )}
    </>
  );
};

export default ArchiveSection;
