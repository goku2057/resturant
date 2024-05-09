'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CldUploadButton, CldUploadWidgetInfo, CldUploadWidgetResults } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

interface editableImage {
    setLink: (link: string) => void;
}

export default function EditableImage ({ setLink }: editableImage) {
    const [imageId ,setImageId] = useState('');

    useEffect(() => {
        setLink(imageId);
    }, [imageId])

    return (
        <>
            <div className="flex gap-5 items-center flex-col">
                <div className="flex flex-col items-center">
                    <CldUploadButton 
                        className="p-2 bg-gray-400 font-bold text-white rounded w-20  m-5" 
                        uploadPreset="next_cloudinary_app" 
                        onUpload={(results: any) => {
                            if (results.event === 'success') {
                                setImageId(results.info?.public_id)
                            }
                        }}
                    />
                    {imageId && (
                        <CldImage
                            width="100"
                            height="200"
                            src={imageId}
                            sizes="100vw"
                            alt=""
                        />
                    )}
                </div>
            </div>
        </>
    );
}