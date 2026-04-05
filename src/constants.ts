export const CLINIC_PHONE = "+919752698279";
export const WHATSAPP_MESSAGE = "Hi BMD Dental Clinic, I would like to book an appointment for a dental consultation.";

export const getWhatsAppLink = (message = WHATSAPP_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CLINIC_PHONE.replace('+', '')}?text=${encodedMessage}`;
};
