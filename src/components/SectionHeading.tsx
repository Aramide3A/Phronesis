type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`sec-title ${align === "center" ? "text-center" : ""}`}>
      <span className="title">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
