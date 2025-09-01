// src/components/ourBlogComponents/archiveSection/ArchiveSection.jsx
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { SubTitle, SmallText } from "../../common/texts";
import { getUniqueDatesWithCount } from "../../../pages/ourBlog/logicBlog";
import { api } from "../../../utils/api/api";
import styled from "styled-components";

export const getMonthNumber = (name) => {
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
  return months[name.toLowerCase()];
};

const ArchiveSection = ({ getBlogs }) => {
  const [archives, setArchives] = useState([]);
  const showLoader = useSelector((state) => state.loader.isLoading);
  const { t } = useTranslation("ourBlog");

  useEffect(() => {
    api
      .get("/blogs")
      .then((res) => setArchives(getUniqueDatesWithCount(res.data)));
  }, []);

  return (
    <>
      {!showLoader && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <SubTitle className="mb-4">{t("archive")}</SubTitle>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>
                  <SmallText>{t("month")}</SmallText>
                </th>
                <th>
                  <SmallText $align="center">{t("posts")}</SmallText>
                </th>
              </tr>
            </thead>
            <tbody>
              {archives.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <SmallText>
                      <Link
                        to={`/blogs/${getMonthNumber(item.month)}/${item.year}`}
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
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ArchiveSection;
