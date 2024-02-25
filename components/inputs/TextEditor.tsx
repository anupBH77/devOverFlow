import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// interface TextEditorProps{
//   name:
// }
export default function TextEditor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
        //@ts-ignore
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
      
      apiKey='49758foz6r91grsr2jz4oqeci3b0yxxyoxeje2s9knt1ni80'
        onInit={(evt, editor) => 
            //@ts-ignore
            editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    
    </>
  );
}
