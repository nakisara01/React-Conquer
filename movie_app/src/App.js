import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 5,
      
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.3,
  },
  {
    id: 3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7,
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.1,
  },
];

function renderFood(food) {
  console.log(food);
  return <Food key={food.id} name={food.name} img={food.image} rating={food.rating} />;
}

function Food({ id, name, img, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div>{foodILike.map(renderFood)}</div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;

//Component는 HTML을 반환하는 함수 -> JSX 개념
//fav라는 이름의 property를 kimchi라고 준거임
//function에 { name } 형태로 구조 분해가 가능하다.
