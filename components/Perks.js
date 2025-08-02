export default function Perks() {
  return (
    <section className="bg-green-900 rounded-lg p-6 flex flex-col md:flex-row items-center mb-10">
      <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
        <div className="bg-gray-200 rounded-md overflow-hidden shadow-lg w-full h-full  aspect-video">
          <img
            src="https://cdn2.workadvantage.in/images/cdn_upload/cdn/29228/ff51780eb7.png"
            alt="Video"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="flex-1 md:pl-8">
        <ul className="space-y-2 text-white">
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">
                <svg width="20" height="20" fill="currentColor"><path d="M7 13l3 3 7-7-1.5-1.5L10 13l-2.5-2.5L7 13z" /></svg>
              </span>
              Lorem Ipsum is simply dummy text of the print and typesetting industry.
            </li>
          ))}
        </ul>
        <div className="bg-white rounded-md mt-6 p-4 flex items-center gap-4">
          <img
            src="https://cdn3.workadvantage.in/images/cdn_upload/cdn/29230/d4ecbce4c8.png"
            alt="PDF"
            className="w-16 h-16"
          />
          <div>
            <div className="text-sm font-semibold text-gray-500">Doc1.PDF</div>
          </div>
          <div className="border-l-2 border-green-300 border-dashed h-12 mx-4"></div>
          <span className="ml-auto">
            <img
              src="https://cdn3.workadvantage.in/images/cdn_upload/cdn/29229/503cdcf79c.png"
              alt="FAQ"
              className="w-12 h-12"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
