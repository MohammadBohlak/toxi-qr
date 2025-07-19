import { AiOutlineSearch } from "react-icons/ai";
// src/components/Archive/ArchiveSection.jsx
import { useEffect, useState } from "react";
import { Form, InputGroup, Button, Table } from "react-bootstrap";
import { archiveData } from "../../../pages/ourBlog/data";
import { SmallText, SubTitle } from "../../common/texts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  ArchiveSkeleton,
  ContentSceleton,
  SearchSkeleton,
} from "./archiveSkeleton";
import { api } from "../../../utils/api/api";
import { getUniqueDatesWithCount } from "../../../pages/ourBlog/logicBlog";
const getMonthNumber = (name) => {
  const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  // تحويل الاسم إلى أحرف صغيرة قبل المطابقة
  return months[name.toLowerCase()];
};

const ArchiveSection = ({ setAllBlogs, setBlogs, blogs }) => {
  const [archives, setArchives] = useState([]);
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setArchives(getUniqueDatesWithCount(res.data));
    });
  }, []);

  const showLoader = useSelector((state) => state.loader.isLoading);
  return (
    <>
      {showLoader ? (
        <ArchiveSkeleton>
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
          <SubTitle className=" mb-4">Archive</SubTitle>
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
              {archives.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <SmallText>
                        {" "}
                        <Link
                          to={`/blog/${getMonthNumber(item.month)}/${
                            item.year
                          }`}
                          className="text-decoration-none"
                        >
                          {item.month} {item.year}
                        </Link>
                      </SmallText>
                    </td>
                    <td>
                      <SmallText $align="center">{item.count}</SmallText>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </section>
      )}
    </>
  );
};

export default ArchiveSection;
