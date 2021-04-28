import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// router 는 네트워크에서 데이터의 전달을 촉진하는 중계 장치
