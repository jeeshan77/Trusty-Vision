'use client';

export default function TestVideo() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <video
        src="/assets/model.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[400px] h-[400px] bg-black"
      />
    </div>
  );
}
