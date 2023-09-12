// src/components/RouteComponent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const RouteComponent = ({ routes }) => {
  const { path } = useParams();
  const route = routes.find((r) => r.path === `/${path}`);

  if (!route) {
    return <div>Route not found</div>;
  }

  const Component = route.component;

  return (
    <div>
      <h2>{route.label}</h2>
      <Component />
    </div>
  );
};

export default RouteComponent;
