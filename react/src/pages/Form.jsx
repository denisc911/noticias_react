import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNewsDispatch } from '../context/NewsContext';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useNewsDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNews = { title, content };
    dispatch({ type: 'ADD_NEWS', payload: newNews });
    localStorage.setItem('news', JSON.stringify(newNews));
    navigate('/list');
  };

  return (
    <div>
      <h2>Create News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
