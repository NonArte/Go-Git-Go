import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchRepos } from './action';

function gitSearch() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state =>state.user);
  const repos = useSelector(state => state.repos);
  const [isToggled, setIsToggled] = useState(true);

  const handleSearch = e => {
    e.preventDefault();
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    setUsername('')
    setIsToggled(true)
  };
  const reset = () => {
    setIsToggled(!isToggled);
  } 
 
  return (
    <div className='Search'>
      <form onSubmit={handleSearch}>
        <label><p>GitHub Username:</p>
          <input
            type="text"
            placeholder="e.g. facebook"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className={`Content ${(user.data.name && isToggled) ? 'Active': 'Inactive'}`}>
        {user.loading && <p>Loading user information...</p>}
        {user.error && <p>{user.error}</p>}
        {user.data && (
          <div className='User'>
            <div>
              <img src={user.data.avatar_url} />
              <p>{user.data.name}</p>
            </div>
            <p><b>Bio:</b> {user.data.bio}</p>
            <p><b>Location:</b> {user.data.location}</p>
          </div>
        )}
        {repos.loading && <p>Loading repository information...</p>}
        {repos.error && <p>{repos.error}</p>}
        {repos.data && (
          <div className='Repo'>
            <h2>Repositories:</h2>
            <ul>
              {repos.data.map(repo => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
} 
export default gitSearch;