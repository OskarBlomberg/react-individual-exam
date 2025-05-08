import "./BackButton.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <ArrowLeft color="white" size={30} />
    </button>
  );
}
