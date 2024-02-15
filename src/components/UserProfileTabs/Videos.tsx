import React from 'react'
import Video from "@/components/Media/VideoSection/Video"

export default function Videos() {
    return (
        <div className='w-full mt-12 columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4 gap-4'>
            <Video src="osljlfwo9vdtojqt4tbu" title="Nature Video Test" isControls />
            <Video src="osljlfwo9vdtojqt4tbu" title="Nature Video Test" isControls />
            <Video src="osljlfwo9vdtojqt4tbu" title="Nature Video Test" isControls />
            <Video src="osljlfwo9vdtojqt4tbu" title="Nature Video Test" isControls />
        </div>
    )
}
