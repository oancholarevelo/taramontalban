export default function Loading() {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
    </div>
  );
}