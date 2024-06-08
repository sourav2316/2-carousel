import "./App.css";
import { useState, useEffect } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?t=st=1717837809~exp=1717841409~hmac=fda59ffcd2e782a68dafb18fe1c5aa2531ffb8c74a7b4fbd8fd35a772eb13bea&w=1060",
    title: "Item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-photo/brown-goshawk-captured-flight_181624-61164.jpg?t=st=1717838162~exp=1717841762~hmac=1bc1038f3bdfa38af0e7761f0c3f8d0b007c25c81a6449c0492b59f4a9476408&w=1060",
    title: "Item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-scenery-palm-tree-middle-greenery-with-calm-sea-background_181624-34303.jpg?t=st=1717838202~exp=1717841802~hmac=ad49c54acfb08f5d25b9326f5d5283aea7e4b307bc89bc4d1fe612df808c45ae&w=1060",
    title: "Item 3",
  },
];

function App() {
  const [activeItems, setActiveItems] = useState(0);

  const handleNextButton = () => {
    if (activeItems === items.length - 1) {
      setActiveItems(0);
    } else {
      setActiveItems(activeItems + 1);
    }
  };

  const handlePrevButton = () => {
    if (activeItems === 0) {
      setActiveItems(items.length - 1);
    } else {
      setActiveItems(activeItems - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextButton();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeItems]);

  return (
    <>
      <div>
        <div>
          <img src={items[activeItems].imageUrl} width={200} height={200} />
        </div>
        <h1>{items[activeItems].title}</h1>
        <button onClick={handlePrevButton}>Prev</button>
        <button onClick={handleNextButton}>Next</button>
      </div>
    </>
  );
}

export default App;
