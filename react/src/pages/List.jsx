import { useNewsState } from '../context/NewsContext';

function List() {
  const news = useNewsState();

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
