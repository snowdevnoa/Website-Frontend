import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Courses() {
	return (
		<>
			<NextSeo title="Courses" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
