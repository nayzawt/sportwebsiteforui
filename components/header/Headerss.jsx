import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from '@mui/material';



const Headerss = () => {
        const [header, setHeader] = useState(false);
        const [big, setBig] = useState(false);
        const [oneMega, setOneMega] = useState(false);
        const handleHeader = () => {
            setHeader(hed => !hed);
        }

        const handleBig = () => {
            setBig(prev => !prev);
        }

        const handleOneMega = () => {
            setOneMega(mga => !mga);
        }

  return (
    <div className='main-header'>
        <div className='header'>
      <div className="inner-header">
        <div className="header-left">
            <div className="header-logo">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/10/44/runner-304409_960_720.png" className='header-logo-img' alt="" />
            </div>
            <h4 className="header-title">Sports</h4>
        </div>
        <div className="header-right">
            <div className="header-right-child-second">
                <Link href={'/'} style={{textDecoration:'none'}} className='header-home'>Home</Link>
            </div>
            <div className="header-right-child">
                <Link href={'/aboutpage'} style={{textDecoration:'none'}} className='header-home'>About</Link>
            </div>
            <div className="header-right-child">
                <Link href={'/contactpage'} style={{textDecoration:'none'}} className='header-home'>Contact</Link>
            </div>
            
            
            {/* <div className="header-right-search">
                <SearchOutlinedIcon className='header-icon' />
            </div> */}
    
      </div>
    </div>  
    </div>
    
    </div>
  )
}

export default Headerss;