import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Duckling",
	description: "Duckling Company portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body>{children}</body>
		</html>
	);
}
