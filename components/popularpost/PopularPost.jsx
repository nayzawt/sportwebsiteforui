import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { API_URL } from '../api/Api';

const PopularPost = ({item}) => {
    return (
        <div className="second-right-related-post-inner">
            <figure className="second-right-related-post-card">
                <Image src={ item.image} alt="" width={500} height={500} />
                <figcaption>
                    <ImageOutlinedIcon className='h3' />
                </figcaption>
                <Link href={item.id}></Link>
            </figure>
            <div className="second-right-related-content">
                <div className="second-right-related-span">
                    <div>{item.title}</div>
                    <div>{item.viewCounts} views</div>
                </div>

                <div className="second-right-related-desc" id='content-second' dangerouslySetInnerHTML={{ __html: item.desc }} />

                <span>...</span>

            </div>
        </div>
    )
}

export default PopularPost
