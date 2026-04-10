const people = [
	{
		name: "Akihiro Nishiyama",
		role: "Software Engineer",
		links: [{ label: "GitHub", href: "https://github.com/dummy-akihiro" }],
	},
	{
		name: "Keiko Higuchi-Nishiyama",
		role: "Frontend Engineer",
		links: [
			{ label: "GitHub", href: "https://github.com/kkoisland" },
			{ label: "kkoisland.com", href: "https://www.kkoisland.com" },
		],
	},
];

const HeroSection = () => {
	return (
		<section className="flex flex-col items-center justify-center py-24 px-8">
			<div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
				{people.map((person) => (
					<div
						key={person.name}
						className="flex flex-col gap-2 items-center text-center"
					>
						<h1 className="text-2xl font-bold text-foreground">
							{person.name}
						</h1>
						<p className="text-foreground/60">{person.role}</p>
						<div className="flex flex-col gap-1 mt-2">
							{person.links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HeroSection;
