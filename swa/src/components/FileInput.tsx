import { useEffect, useRef } from 'react';
import * as React from 'react';

export interface IFileInputProps {
    onChange: (
        fileList: File
    ) => void;
};
export function FileInput(props: IFileInputProps)  {
 
  const [file, setFile] = React.useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  
  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setFile(file);
      props.onChange(file);
    }
  };
  const updateFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
      props.onChange(file);
    }
  };
  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

 

    return (
      <div className={"container"}>
      <div
        className='flex flex-col items-center justify-center pt-1 pb-1'
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        onClick={handleImageUploadClick}
      >
        {file ? (
          <span><span>{file.name} - {file.size}</span><button title='upload' onClick={()=>props.onChange(file)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
        </svg>
        </button></span>
        ) : (
          <>
          <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </>
        )}
        <input
        title='upload'
          ref={fileInputRef}
          type="file"
          accept={"*/*"}
          style={{ display: "none" }}
          onChange={updateFile}
        />
      </div>
    </div>
  
    );
};