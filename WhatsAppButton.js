import React from "react";

export default function WhatsAppButton({ phone = "+911234567890" }) {
  const link = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hi%20I%20need%20career%20counselling`;
  return (
    <a
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg"
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
