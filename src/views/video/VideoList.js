import React, { lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videoList } from "../../redux/video/Action";
import { Link, useHistory } from "react-router-dom";
import TagsInput from "../base/tagsinput/TagsInput";

import {
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CCollapse,
} from "@coreui/react";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const fields = [
  "id",
  "channel_id",
  "video_title",
  "publish_time",
  "status",
  "show_details",
];

const VideoList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const videoStore = useSelector((state) => state.videoReducer.videoList);
  const [page, setPage] = useState(1);
  const per_page = 15;

  const callVideoListApi = () => {
    dispatch(
      videoList({
        page,
        per_page,
      })
    );
  };

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  useEffect(() => {
    callVideoListApi();
  }, [page]);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Video List</CCardHeader>
            <CCardBody>
              <CDataTable
                items={videoStore.list}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={15}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() =>
                            history.push({
                              pathname: `/videos/${item.id}`,
                              state: { item },
                            })
                          }
                        >
                          Tag
                        </CButton>
                      </td>
                    );
                  },
                  // details: (item, index) => {
                  //   return (
                  //     <CCollapse show={details.includes(index)}>
                  //       <CCardBody>
                  //         <p>Youtube ID: {item.video_youtube_id}</p>
                  //         <p>Youtube Description: {item.video_description}</p>
                  //         <div className="text-muted">
                  //           Tags:{" "}
                  //           {item.tags ? (
                  //             <TagsInput taglist={item.tags} />
                  //           ) : (
                  //             // item.tags.map((tag, index) => (
                  //             //     <span>{tag.name}</span>
                  //             //   ))
                  //             "No tags"
                  //           )}
                  //         </div>
                  //         <CButton size="sm" color="info">
                  //           Save Tags
                  //         </CButton>
                  //         <CButton size="sm" color="danger" className="ml-1">
                  //           Delete Video
                  //         </CButton>
                  //       </CCardBody>
                  //     </CCollapse>
                  //   );
                  // },
                }}
              />
              <CPagination
                size="sm"
                activePage={page}
                pages={videoStore.total_page}
                onActivePageChange={setPage}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default VideoList;
