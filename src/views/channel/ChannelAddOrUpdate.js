import React, { lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelAdd } from "../../redux/channel/Action";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

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

const ChannelAddOrUpdate = () => {
  const dispatch = useDispatch();
  const [channelInfo, setChannelInfo] = useState({
    channel_id: "",
    channel_title: "",
    language: "",
  });

  const channelStore = useSelector((state) => state.channelReducer.channelAdd);

  const handleChange = (event) => {
    setChannelInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    callChannelAddApi();
  };

  const callChannelAddApi = () => {
    dispatch(channelAdd(channelInfo));
  };

  useEffect(() => {
    console.log(channelStore);
    if (channelStore.message === "ok") {
      alert("등록 되었습니다.");
      window.location.href = `/channels`;
    }
  }, [channelStore]);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Channel List</CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Channel Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="channel_id"
                      name="channel_id"
                      placeholder="Text"
                      onChange={handleChange}
                    />
                    <CFormText>This is a channel id</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Channel Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="channel_title"
                      name="channel_title"
                      placeholder="Text"
                      onChange={handleChange}
                    />
                    <CFormText>This is a channel title</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Please check language</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom
                      name="language"
                      id="language"
                      onChange={handleChange}
                    >
                      <option value="0">Please select</option>
                      <option value="ko">Korean</option>
                      <option value="en">English</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={handleSubmit}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ChannelAddOrUpdate;
