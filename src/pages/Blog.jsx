import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ktbh_blog_v1';

export default function Blog() {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <section className="section">
      <h2>Blog</h2>

      <div className="card">
        <h4>Write a new post</h4>
        <div className="grid gap">
          <input className="input" placeholder="Post title" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea className="input" placeholder="Your thoughts…" rows={6} value={content} onChange={e=>setContent(e.target.value)} />
          <div className="row gap">
            <button
              className="btn"
              onClick={() => {
                if (!title.trim()) return;
                setPosts([{ id: crypto.randomUUID(), title, content, date: new Date().toISOString() }, ...posts]);
                setTitle(''); setContent('');
              }}
            >Publish</button>
            <button className="btn outline" onClick={()=>{setTitle(''); setContent('');}}>Clear</button>
          </div>
        </div>
      </div>

      <div className="grid gap mt">
        {posts.length === 0 ? (
          <p className="muted">No posts yet. Write your first one above.</p>
        ) : posts.map(p => (
          <div key={p.id} className="card">
            <div className="row between">
              <div>
                <h4>{p.title}</h4>
                <p className="tiny muted">{new Date(p.date).toLocaleString()}</p>
              </div>
              <button className="link danger" onClick={()=>setPosts(posts.filter(x=>x.id!==p.id))}>Delete</button>
            </div>
            <article className="prose">{p.content}</article>
          </div>
        ))}
      </div>
    </section>
  );
}
