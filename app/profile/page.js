"use client";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";

function profile() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt/");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async () => {};
  return (
    <div>
      <Profile data={[]} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default profile;
