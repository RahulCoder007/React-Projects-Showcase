import logoImg from "../assets/Logo.png";
function Logo({ width = "150px" }) {
  return (
    <div className="w-auto">
      <img src={logoImg} width={width} alt="logo" />
    </div>
  );
}

export default Logo;
