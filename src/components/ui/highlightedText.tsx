"use client";
import { useRef, useEffect } from "react";
import { annotate } from "rough-notation";

interface highlightedTextProps {
	className?: string;
}

const HighlightedText = ({ className }: highlightedTextProps) => {
	const frontendTextRef = useRef<HTMLSpanElement>(null);
	const uxTextRef = useRef<HTMLSpanElement>(null);
	const impactTextRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (frontendTextRef.current) {
			const frontendTextAnnotation = annotate(frontendTextRef.current, {
				type: "underline",
				color: "#000000",
				strokeWidth: 2,
			});
			frontendTextAnnotation.show();
		}
		if (uxTextRef.current) {
			const uxTextAnnotation = annotate(uxTextRef.current, {
				type: "underline",
				color: "#000000",
				strokeWidth: 2,
			});
			uxTextAnnotation.show();
		}
		if (impactTextRef.current) {
			const impactTextAnnotation = annotate(impactTextRef.current, {
				type: "underline",
				color: "#000000",
				strokeWidth: 2,
			});
			impactTextAnnotation.show();
		}
	}, []);

	return (
		<p className={className}>
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