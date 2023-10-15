export default function StartPageNavLinks() {
  const listItems = ["about", "testimonials", "features", "pricing"];

  return (
    <>
      <li>
        <a href="/#" className="home-link">
          Top <span className="material-symbols-outlined">vertical_align_top</span>
        </a>
      </li>
      {listItems.map((item, i) => (
        <li key={i}>
          <a href={`#${item}`}>
            {item[0].toUpperCase() + item.slice(1)} <span className="material-symbols-outlined">tag</span>
          </a>
        </li>
      ))}
    </>
  );
}
