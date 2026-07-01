const stack = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vercel", slug: "vercel" },
] as const;

export function TechStackStrip() {
  return (
    <div className="px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="text-center text-xs text-content-muted sm:text-left">
          Dibangun dengan teknologi modern
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {stack.map((item) => (
            <li key={item.slug}>
              <img
                src={`https://cdn.simpleicons.org/${item.slug}/A69B8D`}
                alt={item.name}
                width={22}
                height={22}
                className="h-5 w-5 opacity-40 grayscale"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
