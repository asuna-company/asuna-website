export default function DottedBackground() {
  return (
    <div className="absolute inset-0 flex justify-end -z-10">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`h-full w-px bg-gray-300/50`}
          style={{
            backgroundImage: 'linear-gradient(to bottom, #ffffff 33%, transparent 33%)',
            backgroundSize: '1px 25px',
            marginRight: i === 3 ? '9rem' : '16rem',
          }}
        />
      ))}
    </div>
  )
}
