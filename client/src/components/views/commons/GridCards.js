import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative' }}>
            <a href={`/movie/${props.movieId}`}>
                <img src={props.image} alt={props.movieName} />
            </a>
        </div>
    </Col>
  );
}

export default GridCards