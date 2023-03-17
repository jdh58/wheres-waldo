export default function PopUp(props) {
  return (
    <div className="tagPopUp" style={{ top: props.y, left: props.x }}>
      <p onClick={props.handleClick} className="spongeBob">
        SpongeBob
      </p>
      <p onClick={props.handleClick} className="mario">
        Mario
      </p>
      <p onClick={props.handleClick} className="ironMan">
        Iron Man
      </p>
      <p onClick={props.handleClick} className="yoda">
        Yoda
      </p>
      <p onClick={props.handleClick} className="spiderMan">
        Spider-Man
      </p>
      <p onClick={props.handleClick} className="peterGriffin">
        Peter Griffin
      </p>
      <p onClick={props.handleClick} className="sonic">
        Sonic
      </p>
      <p onClick={props.handleClick} className="homerSimpson">
        Homer Simpson
      </p>
      <p onClick={props.handleClick} className="taz">
        Taz
      </p>
      <p onClick={props.handleClick} className="bartSimpson">
        Bart Simpson
      </p>
    </div>
  );
}
