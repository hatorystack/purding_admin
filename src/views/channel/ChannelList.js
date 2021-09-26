import React, { lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelList } from "../../redux/channel/Action";
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
const fields = ["id", "language", "channel_title", "channel_id", "created_at"];

const ChannelList = () => {
  const dispatch = useDispatch();
  const channelStore = useSelector((state) => state.channelReducer.channelList);
  const [page, setPage] = useState(1);

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
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ChannelList;
