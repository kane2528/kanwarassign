const levels = [
  {
    level: 1,
    title: "Level 1",
    desc: "Lorem Ipsum is simply dummy text of the print and typesetting industry.",
  },
  {
    level: 2,
    title: "Level 2",
    desc: "Lorem Ipsum is simply dummy text of the print and typesetting industry.",
  },
  {
    level: 3,
    title: "Level 3",
    desc: "Lorem Ipsum is simply dummy text of the print and typesetting industry.",
  },
];

export default function Section2() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
      <div className="w-full pl-8 md:w-1/2  flex flex-col">
        <p className="mb-6 text-gray-600">
          <span className="font-semibold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levels.map(({ level, title, desc }) => (
            <div
              key={level}
              className="bg-white rounded-md shadow-md p-6 text-center flex flex-col items-center"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative min-w-[200px]">
        <img
          src="https://cdn1.workadvantage.in/images/cdn_upload/cdn/29227/09150ead65.png"
          alt="Video"
          className="object-contain h-[330px] md:h-[400px] w-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
}
