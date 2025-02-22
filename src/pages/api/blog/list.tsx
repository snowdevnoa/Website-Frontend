import axios from "axios";
import { getRepositoryFolders } from "./repository";
import { CourseMeta } from "types";

export async function getBlogList(): Promise<CourseMeta[]> {
	const courses = await getRepositoryFolders();

	const metadata = courses.map(async (course) => {
		const url = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Blog/main/${course}/.metadata.json`;

		const res = await axios.get(url);

		return res.data;
	});

	const data = await Promise.all(metadata);
	return data;
}
