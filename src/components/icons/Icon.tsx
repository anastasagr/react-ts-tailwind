
interface IconType {
    icon:string;
    size:number;
}

function Icon({icon,size}: IconType) {
  return (
    <i className={icon} style={{fontSize: size}}/>
  );
}

export default Icon;

  