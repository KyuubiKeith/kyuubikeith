// ==================== Imports ====================//

//Nextjs
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ViewContext } from "../../../../organisms/vendors/context/viewPort";

// ==================== Imports ====================//

// ==================== Query ====================//
// ==================== Query ====================//

// ==================== Render ====================//

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const Mark = React.forwardRef(({ onClick, href }, ref) => {
	const viewPort = useContext(ViewContext);

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			className='brandMark'
			target='_blank'
			rel='noopener noreferrer'>
			<Image
				className={viewPort ? "mobileLogo" : "desktopLogo"}
				alt='BlerdCorps | HavoxWorx Brand Icon'
				src={
					viewPort
						? "/Images/Logo/KyuubiKeith.svg"
						: "/Images/Logo/KyuubiKeith.svg"
				}
				width={viewPort ? 30 : 30}
				height={viewPort ? 30 : 30}
			/>
		</a>
	);
});

export default function BrandMark() {
	return (
		<Link href='/' passHref>
			<Mark />
		</Link>
	);
}

Mark.displayName = 'brandMark';

// ==================== Render ====================//
