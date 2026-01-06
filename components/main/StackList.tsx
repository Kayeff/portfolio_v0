export default function StackList({ skill }: { skill: string }) {
  return (
    <li className="border text-foreground border-foreground hover:bg-foreground hover:text-background text-sm px-1 font-medium duration-300 group">
      <span className="group-hover:translate-x-2.5 duration-300 inline-block cursor-default">
        {skill}
      </span>
    </li>
  );
}
