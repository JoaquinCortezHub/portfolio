"use client";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

interface BlurFadeTextProps {
	delay: number;
	className: string;
	yOffset: number;
	text: string;
}

const BlurFadeText: React.FC<BlurFadeTextProps> = ({
	delay,
	className,
	yOffset,
	text,
}) => {
	const nameRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (nameRef.current) {
			const annotation = annotate(nameRef.current, {
				type: "highlight", 
				color: "#F9FF88", 
				padding: 5,
				iterations: 1
			});
			annotation.show();
		}
	}, []);

	return (
		<span
			className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ${className}`}
		>
			Hi, I&apos;m{" "}
			<span ref={nameRef} className="relative">
				{text}
			</span>{" "}
			👋
		</span>
	);
};

export default BlurFadeText;
