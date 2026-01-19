import { useState, useEffect } from "react";

export default function Main() {
  // Meme images array
  const [allMemes, setAllMemes] = useState([]);

  // Current meme state
  const [meme, setMeme] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  // Fetch meme images from API on component mount
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((error) => console.error("Error fetching memes:", error));
  }, []);

  // Function to get random meme image
  function getRandomMemeImage() {
    if (allMemes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMemes.length);
      const randomMeme = allMemes[randomIndex];

      setMeme((prevMeme) => ({
        ...prevMeme,
        imageUrl: randomMeme.url,
      }));
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;
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

        <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
