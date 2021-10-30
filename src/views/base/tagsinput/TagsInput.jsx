import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagAdd, tagDelete } from "src/redux/tag/Action";
import { videoTagging, videoReset, videoUpdate } from "src/redux/video/Action";
import { useHistory } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import { CButton, CSwitch } from "@coreui/react";

const TagsInput = ({ videoitem }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [videoStatus, setVideoStatus] = useState(videoitem.item.status);

  const tagAddStore = useSelector((state) => state.tagReducer.tagAdd);
  const videoTaggingStore = useSelector(
    (state) => state.videoReducer.videoTagging
  );

  // const videoUpdateStore = useSelector(
  //   (state) => state.videoReducer.videoUpdate
  // );

  useEffect(() => {
    if (videoTaggingStore.message === "ok") {
      setTags([]);
      dispatch(videoReset());
      history.goBack();
    }
  }, [videoTaggingStore]);

  useEffect(() => {
    setTags(videoitem.item.tags);
  }, [videoitem]);

  console.log("tags", tags);
  console.log("videoitem:", videoitem);
  console.log("videoTagStore:", videoTaggingStore);

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
    dispatch(
      tagDelete({
        name: tags[index],
      })
    );
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  const saveTagging = () => {
    tags.forEach((item) => {
      dispatch(
        videoTagging({
          video_id: videoitem.item.id,
          tag_id: item.id,
        })
      );
    });
  };

  const changeVideoStatus = () => {
    dispatch(
      videoUpdate({
        id: videoitem.item.id,
      })
    );
    setVideoStatus(!videoStatus);
  };

  // useEffect(() => {
  //   setTags([...tags, { name: event.target.value }]);
  // }, [tagAddStore])

  // Tag initialization
  useEffect(() => {
    tagAddStore.data.name &&
      setTags([
        ...tags,
        { name: tagAddStore.data.name, id: tagAddStore.data.id },
      ]);
  }, [tagAddStore]);

  console.log("Tag Store", tagAddStore.data.name);

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
