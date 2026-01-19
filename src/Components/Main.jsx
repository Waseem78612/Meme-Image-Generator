import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.target; // Use event.target, not event.currentTarget
    setMeme((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          {meme.topText}
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          {meme.bottomText}
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span> {/* Use state value */}
        <span className="bottom">{meme.bottomText}</span>{" "}
        {/* Use state value */}
      </div>
    </main>
  );
}
