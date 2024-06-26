import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
      <h1 className="text-xl">
        Oops, You don&apos;t have permission to access this page.
      </h1>

      {message && <div className="mb-4 text-red-500">{message}</div>}
    </Layout>
  );
};

export default Unauthorized;
