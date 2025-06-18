import React, { useEffect, useState } from 'react';

export default function Github() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false); // Track if there's an error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Nirmal-blip");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(true); // set error instead of setting data = 0
      }
    };

    fetchData();
  }, []);

  // 🌀 Loading state
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  // 🚫 Error state
  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  // ✅ Render when data is ready
  return (
    <div className="text-center mt-4">
      <p><strong>Username:</strong> {data.login}</p>
      <p><strong>Followers:</strong> {data.followers}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
      <img src={data.avatar_url} alt="avatar" className="w-32 rounded-full mx-auto mt-4" />
    </div>
  );
}
