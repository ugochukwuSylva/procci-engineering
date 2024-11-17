import "./SliderDotList.scss";

function SliderDotList({ isActiveDot, handleActiveDot }) {
  function handleClick() {
    handleActiveDot();
  }

  return (
    <li
      onClick={handleClick}
      style={{
        backgroundColor: isActiveDot
          ? "var(--color-gray-text1)"
          : "var(--color-gray-bg1)",
      }}
      className="dot"
    >
      &nbsp;
    </li>
  );
}

export default SliderDotList;
