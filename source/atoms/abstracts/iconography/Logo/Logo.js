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
const Logo = React.forwardRef(({ onClick, href }, ref) => {
	const viewPort = useContext(ViewContext);

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			className='Logo'
			target='_blank'
			rel='noopener noreferrer'>
			<Image
				className={viewPort ? "mobileLogo" : "desktopLogo"}
				alt='BlerdCorps | HavoxWorx Logo'
				src={
					viewPort
						? "/Images/Logo/KyuubiKeith.svg"
						: "/Images/Logo/KyuubiKeith.svg"
				}
				width={viewPort ? 50 : 50}
				height={viewPort ? 50 : 50}
			/>
		</a>
	);
});

export default function BlerdCorpsLogo() {
	return (
		<Link href='https://kyuubikeith.vercel.app' passHref>
			<Logo />
		</Link>
	);
}

Logo.displayName = "brandLogo";

// ==================== Render ====================//
