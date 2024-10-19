"use client";
import { useRef, useEffect } from "react";
import { annotate } from "rough-notation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface HighlightedTextProps {
	className?: string;
	frontendColor?: string;
	uxColor?: string;
	impactColor?: string;
}

const HighlightedText = ({ 
	className,
	frontendColor = "#000000",
	uxColor = "#000000",
	impactColor = "#000000"
}: HighlightedTextProps) => {
	const frontendTextRef = useRef<HTMLSpanElement>(null);
	const uxTextRef = useRef<HTMLSpanElement>(null);
	const impactTextRef = useRef<HTMLSpanElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const isDarkMode = theme === 'dark';
		const underlineColor = isDarkMode ? '#FFFFFF' : '#000000';
		const highlightColor = isDarkMode ? '#FFFF00' : impactColor;

		if (frontendTextRef.current) {
			const frontendTextAnnotation = annotate(frontendTextRef.current, {
				type: "underline",
				color: underlineColor,
				strokeWidth: 2,
			});
			frontendTextAnnotation.show();
		}

		if (uxTextRef.current) {
			const uxTextAnnotation = annotate(uxTextRef.current, {
				type: "underline",
				color: underlineColor,
				strokeWidth: 2,
				multiline: true,
			});
			uxTextAnnotation.show();
		}

		if (impactTextRef.current) {
			const impactTextAnnotation = annotate(impactTextRef.current, {
				type: "underline",
				color: underlineColor,
				strokeWidth: 2,
				multiline: true,
			});
			impactTextAnnotation.show();
		}
	}, [theme, frontendColor, uxColor, impactColor]);

	return (
		<p className={cn(className)}>
			<span ref={frontendTextRef} className="relative">
				frontend developer
			</span>{" "}
			&{" "}
			<span ref={uxTextRef} className="relative">
				UX/UI designer
			</span>
			. I love building eye-catching products that make an{" "}
			<span ref={impactTextRef} className="relative">
				impact
			</span>{" "}
			on people.
		</p>
	);
};

export default HighlightedText;
