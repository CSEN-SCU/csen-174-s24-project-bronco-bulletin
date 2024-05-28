import React from 'react';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import "./styles/tags.css";

const TOPICS = ["Events", "Clubs", "Activities", "Tutoring"];

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
    if (TOPICS.includes(tag.text)) {
      props.setTags((prevTags) => {
        return [...prevTags, tag];
      });
      props.setError(null);
    } else {
      props.setError("Invalid tag name.");
    }
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
      />
    </div>
  );
};

export default Tags;
