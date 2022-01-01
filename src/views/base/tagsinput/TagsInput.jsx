import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagAdd, tagDelete } from "src/redux/tag/Action";
import { videoTagging, videoReset, videoUpdate, detachTagging } from "src/redux/video/Action";
import { useHistory } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import { CButton, CSwitch } from "@coreui/react";

const TagsInput = ({ videoitem }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [videoStatus, setVideoStatus] = useState(videoitem.item.status);
  const [detachTaggingList, setDetachTaggingList] = useState([]);

  console.log("videoitem", videoitem);

  const tagAddStore = useSelector((state) => state.tagReducer.tagAdd);
  const videoTaggingStore = useSelector(
    (state) => state.videoReducer.videoTagging
  );

  // const videoUpdateStore = useSelector(
  //   (state) => state.videoReducer.videoUpdate
  // );

  console.log("videoitem.item.tags", videoitem.item.tags);
  console.log("videoTaggingStore.message", videoTaggingStore.message);

  useEffect(() => {
    if (videoTaggingStore.message === "ok") {
      dispatch(videoReset());
      history.goBack();
    }
  }, [videoTaggingStore]);

  useEffect(() => {
    setTags(videoitem.item.tags);
  }, [videoitem]);

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      dispatch(
        tagAdd({
          name: event.target.value,
          slug: event.target.value,
        })
      );
      event.target.value = "";
    }
  };

  const removeTags = (index) => {
    setDetachTaggingList([...detachTaggingList, tags[index]]);
    dispatch(
      tagDelete({
        name: tags[index],
      })
    );
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
console.log("detachTaggingList", detachTaggingList);
  const saveTagging = () => {
    if (detachTaggingList.length > 0) {
      detachTaggingList.forEach((item) => {
        dispatch(
          detachTagging({
            video_id: videoitem.item.id,
            tag_id: item.id,
          })
        );
      });
    }

    if (tags.length > 0) {
      tags.forEach((item) => {
        dispatch(
          videoTagging({
            video_id: videoitem.item.id,
            tag_id: item.id,
          })
        );
      });
    }


  };

  const changeVideoStatus = () => {
    dispatch(
      videoUpdate({
        id: videoitem.item.id,
      })
    );
    setVideoStatus(!videoStatus);
  };

  // Tag initialization
  useEffect(() => {
    tagAddStore.data.name &&
      setTags([
        ...tags,
        { name: tagAddStore.data.name, id: tagAddStore.data.id },
      ]);
  }, [tagAddStore]);

  console.log("Tags", tags);

  return (
    <>
      <p>Youtube ID: {videoitem.item.video_youtube_id}</p>
      <p>Youtube Title: {videoitem.item.video_title}</p>
      <p>Youtube Description: {videoitem.item.video_description}</p>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span>{tag.name}</span>
              <CIcon
                size={"sm"}
                name={"cil-x"}
                onClick={() => removeTags(index)}
              />
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(event) => addTags(event)}
          placeholder="Press enter to add tag"
        />
      </div>
      <CButton size="sm" color="info" onClick={() => saveTagging()}>
        Save Tags
      </CButton>
      <CSwitch
        className="ml-3 pt-2"
        color="danger"
        checked={videoStatus}
        shape="pill"
        onChange={() => changeVideoStatus()}
      />
    </>
  );
};

export default TagsInput;
