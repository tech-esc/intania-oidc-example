"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function Profile() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setLoading(true);
      axios
        .post("/api/auth", {
          token,
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {loading ? <p>Loading...</p> : <p>{JSON.stringify(userData)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Profile />
    </Suspense>
  );
}
