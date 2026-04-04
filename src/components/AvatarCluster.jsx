export default function AvatarCluster({ avatars }) {
  return (
    <div className="relative h-[200px] w-full">
      {avatars.map((av, i) => (
        <div
          key={i}
          className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-lg"
          style={{ width: av.size, height: av.size, ...av.style }}
        >
          <img
            src={av.src}
            alt={`team member ${i + 1}`}
            className="w-full h-full object-cover rounded-full block"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
