import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl font-bold text-accent">
        About Pokémon Explorer
      </h1>
      <p className="max-w-xl mx-auto mb-4 text-lg text-secondary">
        This app helps you explore Pokémon data using the PokéAPI!
      </p>
      {/* Bug: Missing navigation link */}
      <Link className="text-xl font-bold text-accent" href="/">
        Go To Home
      </Link>
    </div>
  );
}
