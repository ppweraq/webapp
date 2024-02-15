import React, {useState} from 'react';

const LikeBtn = () => {

const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  }

    return (
            <button>
                <img onClick={toggleLike} src={liked ? './img/icons/overlay_heart.png' : './img/icons/heart.png'} alt="like"/>
            </button>
    );
};

export default LikeBtn;