export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute -inset-10 blur-3xl bg-[#f59e0b]/10 rounded-full animate-pulse" />
        <div
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-[#f59e0b] border-l-2 border-l-transparent border-b-2 border-b-transparent animate-spin"
          style={{ animationDuration: "1.5s" }}
        />
        <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-[#f59e0b]" />
      </div>
      <p className="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
}
