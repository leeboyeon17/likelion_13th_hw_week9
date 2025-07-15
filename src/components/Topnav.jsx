function Topnav() {
  return (
    <nav className="container">
    <div>
      <div className="topnav_list">
        <a><img src="src/assets/arrow-upper-right.png" alt="화살표" />트렌딩</a>
        <a><img src="src/assets/clock.png" alt="시계" />최신</a>
        <a><img src="src/assets/wifi-signal.png" alt="피드" />피드</a>
      </div>
    </div>
    <div className="Topnav_right">
        <div className="HomeTab_selector">
            이번 주<button><img src="src/assets/caret-down.png" alt="필터링" width="10" heigth="5" /></button>
        </div>
        <button><img src="src/assets/dots.png" alt="더보기" height="24" width="24" padding="0" /></button>
    </div>
    </nav>

  );
}

export default Topnav;
