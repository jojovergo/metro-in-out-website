export function GoogleMapEmbed({ className = "h-[400px] w-full" }) {
  // Google Maps embed URL for the address
  const addressQuery = "2401+Shull+Avenue,+Oklahoma+City,+OK+73111";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`overflow-hidden rounded-xl shadow-2xl ${className}`}>
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location of METRO IN & OUT at 2401 Shull Avenue, Oklahoma City, OK 73111"
      ></iframe>
    </div>
  );
}