import React, { lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelList, channelVideoUpdate } from "../../redux/channel/Action";
import { Link } from "react-router-dom";

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
} from "@coreui/react";

import usersData from "../users/UsersData";

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
const fields = ["id", "language", "channel_title", "channel_id", "created_at", "update_video"];

const ChannelList = () => {
  const dispatch = useDispatch();
  const channelStore = useSelector((state) => state.channelReducer.channelList);
  const channelYoutubeVideoUpdateStore = useSelector((state) => state.channelReducer.channelYoutubeVideoUpdate);
  const [page, setPage] = useState(1);

  const callChannelYoutubeVideo = (channelId, youtubeChannelId) => {
    dispatch(
      channelVideoUpdate({
        channel_id: channelId,
        youtube_channel_id: youtubeChannelId,
      })
    );
  };

  const callChannelListApi = () => {
    dispatch(
      channelList({
        page,
      })
    );
  };

  useEffect(() => {
    callChannelListApi();
  }, [page]);

  useEffect(() => {
    if (channelYoutubeVideoUpdateStore.message === "ok") {
      alert("등록 되었습니다.");
    }
  }, [channelYoutubeVideoUpdateStore]);

  useEffect(() => {}, [channelStore.list]);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Channel List</CCardHeader>
            <CRow className="d-flex justify-content-end p-3">
              <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                <CButton block color="primary">
                  <Link to={`/channels/add`} className="text-light">
                    Add Channel
                  </Link>
                </CButton>
              </CCol>
              <CCol col="6" sm="4" md="3" className="mb-3 mb-xl-0">
                <CButton block color="danger" className="text-light">
                    Update All Channel Videos
                </CButton>
              </CCol>
            </CRow>
            <CCardBody>
              <CDataTable
                items={channelStore.list}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={15}
                pagination
                scopedSlots={{
                  update_video: (item) => (
                    <td>
                      <CButton block size="sm" color="danger" onClick={() => callChannelYoutubeVideo(item.id, item.channel_id)}>
                        Update Video
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
            <CPagination
                size="sm"
                activePage={page}
                pages={channelStore.total_page}
                onActivePageChange={setPage}
              />
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ChannelList;
