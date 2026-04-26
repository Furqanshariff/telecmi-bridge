export default async function handler(req, res) {
  const rawPhone = req.body.to || "";
  const digits = String(rawPhone).replace(/\D/g, "");
  const cleanPhone = parseInt(digits.startsWith("91") ? digits : "91" + digits);

  const payload = {
    user_id: "5003_33337829",
    secret: "ff60d978-7d3d-431f-96d0-1e4b6a24049a",
    to: cleanPhone,
    webrtc: true,
    followme: false
  };

  const response = await fetch("https://rest.telecmi.com/v2/webrtc/click2call", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  res.status(200).json(data);
}
