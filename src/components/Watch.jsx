import { useLocation } from "react-router-dom";

export default function Watch() {
  const { state } = useLocation();

  return (
    <div className="p-10 text-white">
      <video
        src={state.video}
        controls
        autoPlay
        className="w-full max-w-4xl"
      />

      <h1 className="text-2xl mt-4">{state.title}</h1>
    </div>
  );
}