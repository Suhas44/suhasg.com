const Project = ({ title, link, stack, desc }: { title: string, link: string, stack: string[], desc: string }) => {
  return (
    <div>
      <div style={{ clear: "both" }}>
        <h3 style={{ float: "left" }}>{link ? <a style={{ textDecoration: 'none' }} href={link}>{title}</a> : title}</h3>
        <h5 style={{ float: "right", marginRight: "200px" }}>{stack.join(", ")}</h5>
      </div>
      <br /><br />
      <p style={{ marginRight: "200px" }}>{desc}</p>
      <br />
    </div>
  );
}

export default Project;