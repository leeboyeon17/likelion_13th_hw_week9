import Postcard from "./Postcard";
import { dummyData } from "../data/dummy_data";

function Posts() {
  return (
    <main className="postsGrid">
      {dummyData.map((item) => ( //map 함수로 각 Postcard를 반복시킴
        <Postcard
          key={item.postID}
          title={item.title}
          summary={item.content}    
          date={item.createdAt}     
          image={item.thumbnail}    
        />//dummy_data 변수명에 따라 데이터 불러옴
      ))}
    </main>
  );
}

export default Posts;
