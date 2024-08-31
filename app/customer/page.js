"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const Customer = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const createCustomer = async (e) => {
    console.log(email);
    console.log(username);
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/customer", {
        method: "POST",
        body: JSON.stringify({
          email,
          username,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      console.log("session");
      console.log(session);
      console.log(session?.prompt);
    }
  };

  return (
    <form onSubmit={createCustomer}>
      <div>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>email</label>
      </div>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>username</label>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          create customer
        </button>
      </div>
    </form>
  );
};

export default Customer;
