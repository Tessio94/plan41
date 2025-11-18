import React from "react";

const ClipPathIcons = () => {
	return (
		<>
			<svg className="svg">
				<clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
					<path d="M0.05,0.25 L0.45,0.25 A0.05,0.05,0,0,0,0.5,0.2 L0.5,0.05 A0.05,0.05,0,0,1,0.55,0 H0.95 A0.05,0.05,0,0,1,1,0.05 V0.95 A0.05,0.05,0,0,1,0.95,1 H0.05 A0.05,0.05,0,0,1,0,0.95 V0.3 A0.05,0.05,0,0,1,0.05,0.25"></path>
				</clipPath>
			</svg>
			<svg className="svg">
				<clipPath id="my-clip-path2" clipPathUnits="objectBoundingBox">
					<path d="M0.051,0.263 L0.455,0.263 A0.051,0.051,0,0,0,0.515,0.212 L0.515,0.051 A0.051,0.051,0,0,1,0.556,0.01 L0.96,0.01 A0.051,0.051,0,0,1,1,0.051 V0.96 A0.051,0.051,0,0,1,0.96,1 H0.051 A0.051,0.051,0,0,1,0.01,0.96 L0.01,0.303 A0.051,0.051,0,0,1,0.051,0.263"></path>
				</clipPath>
			</svg>
		</>
	);
};

export default ClipPathIcons;
