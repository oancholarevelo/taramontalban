// app/(main)/events/page.tsx
export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Fiestas & Local Events</h1>
        <p className="mt-2 text-lg text-gray-600">Experience the vibrant culture of Rodriguez.</p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Upcoming Events Calendar</h2>
        <div className="divide-y divide-gray-200">
          <div className="py-6 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="mb-2 md:mb-0">
              <p className="text-lg font-semibold text-green-700">Buwan ng Wika Celebration</p>
              <p className="text-gray-600 mt-1">A month-long celebration of the Filipino national language with various activities and performances in schools and offices.</p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right">
              <p className="font-bold text-gray-800">August (Annual)</p>
              <p className="text-sm text-gray-500">Throughout Rodriguez</p>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="mb-2 md:mb-0">
              <p className="text-lg font-semibold text-green-700">Pamitinan Festival</p>
              <p className="text-gray-600 mt-1">A celebration of the town&apos;s founding anniversary and historical roots, featuring street dancing and cultural shows.</p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right">
              <p className="font-bold text-gray-800">August (Annual)</p>
              <p className="text-sm text-gray-500">Town Plaza & Wawa Area</p>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="mb-2 md:mb-0">
              <p className="text-lg font-semibold text-green-700">Christmas Lighting Contest</p>
              <p className="text-gray-600 mt-1">Barangays compete for the most festive and creative holiday decorations, illuminating the entire town.</p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right">
              <p className="font-bold text-gray-800">December 1 - 31</p>
              <p className="text-sm text-gray-500">Throughout Rodriguez</p>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="mb-2 md:mb-0">
              <p className="text-lg font-semibold text-green-700">Holy Week Alay-Lakad</p>
              <p className="text-gray-600 mt-1">A pilgrimage to Wawa where devotees and tourists gather for reflection and tradition.</p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right">
              <p className="font-bold text-gray-800">Maundy Thursday</p>
              <p className="text-sm text-gray-500">Wawa Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}