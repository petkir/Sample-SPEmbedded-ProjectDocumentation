import { useEffect, useRef } from 'react';
import * as React from 'react';

export interface IFileInputProps {
    onChange: (
        fileList: FileList
    ) => void;
};
export function FileInput(props: IFileInputProps)  {
    const inputRef = useRef<HTMLInputElement>(null);
    /*
      useEffect(() => {
        if (inputRef.current) {
          const dataTransfer = new DataTransfer();
          fileList.forEach((file) => dataTransfer.items.add(file));
          inputRef.current.files = dataTransfer.files;
        }
      }, [fileList]);
    */
    return (
        <input
            title='Upload'
            type="file"
            ref={inputRef}
            data-testid="uploader"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files)
                    props.onChange(e.target.files);
            }}
        />
    );
};