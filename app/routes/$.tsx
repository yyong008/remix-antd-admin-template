// core
import React from "react";

// hooks
import { useNavigate } from "@remix-run/react";

// components:vendor
import { Button, Result } from "antd";

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Not Found"
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Not Found
        </Button>
      }
    />
  );
};

export default NoFoundPage;
