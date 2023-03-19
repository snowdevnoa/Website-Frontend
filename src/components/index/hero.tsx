import Section from "@components/section";
import { signIn } from "next-auth/react";

export default function Hero() {
	return (
		<Section>
			<div className="flex flex-col items-center justify-center gap-8 py-20 min-h-[70vh]">
				<h1 className="text-[20vw] text-center md:text-6xl lg:text-7xl xl:text-8xl leading-none select-none tracking-tight font-bold flex flex-col md:flex-row">
					<span
						data-content="Learn."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-1 "
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-1 text-shadow leading-none">
							Learn.
						</span>
					</span>
					<span
						data-content="Develop."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-2"
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-2 text-shadow leading-none">
							Develop.
						</span>
					</span>
					<span
						data-content="Succeed."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-3"
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-3 text-shadow leading-none">
							Succeed.
						</span>
					</span>
				</h1>

				<p className="sm:text-sm md:text-md lg:text-lg xl:text-xl w-full max-w-4xl text-center font-light bg-white/60 bg-clip-text backdrop-blur-sm text-transparent">
					Arafa Tech is a non-profit organization that provides coding
					education and mentorship to underprivileged students,
					empowering them with technical skills for the future.
				</p>
				<button
					className="btn btn-wide btn-primary"
					onClick={() => {
						signIn("discord", { callbackUrl: "/courses" });
					}}
				>
					Get Started
				</button>
			</div>
		</Section>
	);
}
