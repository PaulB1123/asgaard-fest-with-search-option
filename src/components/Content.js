export default function Content(props) {
  return <main className="bg-black px-8 phone:px-8 xl:w-[80%] lg:w-[85%] mx-auto text-concert-yellow space-y-6 relative">{props.children}</main>;
}
