import React from 'react';
import { Link } from 'react-router-dom';
import './nft-card.css';

const NftCard = (props) => {
 const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
 return (
  <div className="single_nft_card">
   <div className="nft_img">
    <img src={imgUrl} alt="" className="w-100" />
   </div>
   <div className="nft_content">
    <h5 className="nft_title">
     <Link to={`/market/${id}`}>{title}</Link>
    </h5>
    <div className="creator_info-wrapper d-flex gap-3">
     <div className="creator_img">
      <img src={creatorImg} alt="" className="w-100" />
     </div>
     <div className="creator_info d-flex w-100 align-items-center justify-content-between">
      <div>
       <h6>Created By</h6> <p>{creator}</p>
      </div>
      <div>
       <h6>Current Bid</h6>
       <p>{currentBid} ETH</p>
      </div>
     </div>
    </div>

    <div className="mt-3 d-flex align-items-center justify-content-between">
     <button className="bid_btn d-flex align-items-center gap-1">
      <i class="ri-shopping-bag-line"></i>Place bid
     </button>
     <span className="history_link">
      <Link to="#">View History</Link>
     </span>
    </div>
   </div>
  </div>
 );
};

export default NftCard;
