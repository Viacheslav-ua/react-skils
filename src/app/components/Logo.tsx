import clsx from "clsx";

export const Logo = ({className}: {className?: string}) => {
  return (
    <div className={clsx(
      'w-28 bg-yellow-300 rounded-full border-2 border-sky-500 font-bold flex items-center',
      className)}>
      <p className="text-sm mb-1 text-sky-800 italic mr-2 pl-3">react</p>
      <div className=" h-8  flex items-center pr-3">
        <p className="text-red-600 pb-3">S</p>
        <p className="text-blue-600 pb-2">K</p>
        <p className="text-blue-600 pb-1">I</p>
        <p className="text-green-600">L</p>
        <p className="text-green-600 pt-1">L</p>
        <p className="text-red-600 pt-2">S</p>
      </div>
    </div>
  );
}