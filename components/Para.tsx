type ParaProps = {
  para: string;
};

export default function Para({ para }: ParaProps) {
  return <p className="tracking-tight text-foreground/75">{para}</p>;
}
