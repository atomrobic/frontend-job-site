import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import'./AdminDashboard.css'

const EditorComponent = () => {
  const [editorData, setEditorData] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobCompany, setJobCompany] = useState('');

  return (
    <div>
      {/* Job Title editor */}
      <h1>2</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>Job Title:</label>
        <Editor
          apiKey="pq6tgtnrw6k9gnnts36npwryy0ajk6bmp6qyk2oackzs6lui" // Optional API key for advanced features
          value={jobTitle}
          onEditorChange={(newData) => setJobTitle(newData)}
          init={{
            height: 150,
            menubar: true, // Enable menu bar
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'emoticons', 'paste', 'table',
              'code', 'wordcount', 'fullscreen'
            ],
            toolbar: [
              'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright | outdent indent | numlist bullist | link image | table | charmap emoticons | fullscreen | code'
            ],
            contextmenu: 'link image inserttable | cell row column deletetable',
          }}
        />
      </div>

      {/* Job Company editor */}
      <div style={{ marginBottom: '20px' }}>
        <label>Job Company:</label>
        <Editor
          apiKey="pq6tgtnrw6k9gnnts36npwryy0ajk6bmp6qyk2oackzs6lui" // Optional API key for advanced features
          value={jobCompany}
          onEditorChange={(newData) => setJobCompany(newData)}
          init={{
            height: 150,
            menubar: true, // Enable menu bar
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'emoticons', 'paste', 'table',
              'code', 'wordcount', 'fullscreen'
            ],
            toolbar: [
              'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright | outdent indent | numlist bullist | link image | table | charmap emoticons | fullscreen | code'
            ],
            contextmenu: 'link image inserttable | cell row column deletetable',
          }}
        />
      </div>

      {/* Job Description editor */}
      <div style={{ marginBottom: '20px' }}>
        <label>Job Description:</label>
        <Editor
          apiKey="pq6tgtnrw6k9gnnts36npwryy0ajk6bmp6qyk2oackzs6lui" // Optional API key for advanced features
          value={editorData}
          onEditorChange={(newData) => setEditorData(newData)}
          init={{
            height: 500,
            menubar: true, // Enable menu bar
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'emoticons', 'paste', 'table',
              'code', 'wordcount', 'fullscreen'
            ],
            toolbar: [
              'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright | outdent indent | numlist bullist | link image | table | charmap emoticons | fullscreen | code'
            ],
            contextmenu: 'link image inserttable | cell row column deletetable',
            spellchecker_language: 'en',
          }}
        />
      </div>

      {/* Displaying the values */}
      <div style={{ marginTop: '20px' }}>
        <h3>Job Details:</h3>
        <p><strong>Job Title:</strong> {jobTitle}</p>
        <p><strong>Job Company:</strong> {jobCompany}</p>

        <h3>Editor Content:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default EditorComponent;
