import React from 'react';

export default function HeroFurnitureItem({ furniture = {} }) {
    return (
        <div className={`hero-furniture-icon ${furniture.acquired ? 'acquired' : ''}`} />
    );
}
