import React from 'react';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import "./styles/tags.css";

const TOPICS = ["Events", "Clubs", "Activities", "Tutors", "Misc"];

const suggestions = TOPICS.map((topic) => {
  return {
    id: topic,
    text: topic,
    className: 'tag',
  };
});


const Tags = (props) => {
  const handleDelete = (index) => {
    props.setTags(props.tags.filter((_, i) => i !== index));
  };

  const handleAddition = (tag) => {
    props.setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  return (
    <div id='tags'>
      <ReactTags
        allowDragDrop={false}
        placeholder="Enter tags"
        tags={props.tags}
        suggestions={suggestions}
        separators={[SEPARATORS.ENTER, SEPARATORS.COMMA, SEPARATORS.SPACE]}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="inline"
        autocomplete
        maxTags={3}
      />
    </div>
  );
};

export default Tags;
