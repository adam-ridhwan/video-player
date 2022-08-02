const Menu = props => {
  const { chooseVideo } = props;

  const handleClick = e => {
    const text = e.target.value;
    chooseVideo(text);
  };

  return (
    <form onClick={handleClick}>
      <input type='radio' name='src' value='fast' /> fast
      <input type='radio' name='src' value='slow' /> slow
      <input type='radio' name='src' value='cute' /> cute
      <input type='radio' name='src' value='eek' /> eek
    </form>
  );
};

export default Menu;
