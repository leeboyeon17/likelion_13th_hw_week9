function Postcard({ title, summary, date, image }) {
  return (
    <div className="postcard">
      <a /*href=""*/><img src={image} alt={title} className="postcard_image" /></a> {/* url 미정이어서 a 태그 내부 href 공란 */}
      <div className="postcard_content">
        <div>
          <a /*href=""*/>
          <h3 className="postcard_title">{title}</h3>
          <p className="postcard_summary">{summary}</p>
          </a>
        </div>
        <div className="postcard_subInfo">
          <span>{date}</span>
        </div>
      </div>
      <div className="postcard_footer"> {/* dummy_data에 해당 user,likes 값 없어서 임의로 입력 */}
          <a className="postcard_userInfo" /*href=""*/>userProfile</a>
          <div className="postcard_likes">
            <img src="src/assets/heart.png" alt="좋아요" width="10px" height="10px"></img> 100
          </div>
      </div>
    </div>
  );
}

export default Postcard;
