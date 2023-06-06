import React from "react";

export default function NewsCard(props) {
  return (
    <div className="w-[28%] rounded-xl overflow-hidden border-2">
      <div className="img overflow-hidden max-h-44">
        {/* //https://via.placeholder.com/400x200 */}
        <img
          src={props.img}
          alt="News_img"
          className="w-full hover:scale-110 transition duration-150 ease-out object-cover"
        />
      </div>
      <div className="p-4 h-full">
        <a href={props.url} target="_blank" rel="noreferrer">
          <h1 className="text-2xl font-semiboldbold text-center my-2">
            {props.title}
          </h1>
          <hr />
          <p className="text-center">{props.disc}</p>
        </a>
      </div>
    </div>
  );
}
