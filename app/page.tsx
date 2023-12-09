"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
    fetch('https://random-data-api.com/api/v2/users?size=10')
      .then(response => response.json())
      .then(data => setUsers(data));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <span className="load">Loading...</span>;
  }

  if (error) {
    return <span className="error">{error}</span>;
  }

  return (
    <div>
      {users.map(user => (
        <section key={user.id} className="user">
          <Image src={user.avatar} alt={user.first_name} width={100} height={100} />

          <div className="wrapper">
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
