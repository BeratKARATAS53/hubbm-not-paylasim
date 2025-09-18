export type Card = {
	code: string;
	title: string;
	image: string;
	website: string | null;
	exams: string | null;
	others: Record<string, any> | null;
	books: Record<string, any> | null;
	badges: string[];
	keywords: string[];
	createdAt: string;
	shown?: boolean;
};
