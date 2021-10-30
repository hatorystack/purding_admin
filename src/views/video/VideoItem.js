import React from "react";
import { useHistory, useLocation } from "react-router";
import TagsInput from "../base/tagsinput/TagsInput";

import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const VideoItem = ({}) => {
  const location = useLocation();
  const videoitem = location.state;

  console.log(videoitem);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Video Item</CCardHeader>
            <CCardBody>
              <TagsInput videoitem={videoitem} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default VideoItem;
