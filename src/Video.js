const Video = props => {
  const src = props.src;
  return (
    <div>
      <video controls autostart='true' autoPlay muted src={src} />
    </div>
  );
};

export default Video;
