import React from 'react';

import FoodLoading from '../../animations/components/FoodLoading';

import "./loadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loadingContainer">
      <FoodLoading />
      <h1 className="loading-title">Calma carai</h1>
      <h2 className="loading-subtitle">
        To carregando as comida do gordo ...
      </h2>
    </div>
  )
}

export default LoadingScreen;