import React from 'react';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

export function PostCard({ title, body },hasImage) {

  const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

  return (
    <div className="may-post-card card">

      {hasImage && (
        <div className="may-post-card-img" id="my-block" onClick={() => {alert("its funny, isn't it?")}}>
          <img src={kittyUrl} alt={'kitty'} />
        </div>
      )}
      {!hasImage && (
        <div className="may-post-card-img">
          <img src={DefaultImg} alt={'no img'} />
        </div>
      )}

      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <div className="card-text body">
          {body}
        </div>
      </div>

    {/*  todo: здесь нужно показать массив коментариев к посту (comments), который прилетит в props
          можно создать отдельную компоненту Comment по аналогии с тем, как мы делали PostCard, UserCard
          как она будет выглядеть зависит от вашей фантазии
          Для каждого комментария должны быть выведены такие поля:
          name - имя автора комментария
          email - почта автора комментария
          body - текст комментария
    */}

    </div>
  )
}

export default PostCard;
