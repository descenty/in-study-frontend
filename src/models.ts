export interface IReview {
	id: number;
	userId: number;
	courseId: number;
	rating: number;
	comment: string;
	createdAt: Date;
	user: IUser;
	course: ICourse;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	courses: ICourse[];
	reviews: IReview[];
}

export interface ICourse {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	createdAt: Date;
	updatedAt: Date;
	image: string;
	lessons: {
		id: number;
		title: string;
		createdAt: true;
		updatedAt: true;
	}[];
	creator: {
		id: number;
		name: string;
	};
	isCreator?: boolean;
	enrolled?: boolean;
}

export interface IShortCourse {
	id: number;
	title: string;
	price: number;
	rating: number;
	image: string;
	creator: {
		id: number;
		name: string;
	};
	users: number;
	enrolled?: boolean;
}

export interface IArticle {
	id: number;
	title: string;
	thumbnail: {
		url: string;
	};
	image: {
		url: string;
	};
	content: string;
	createdAt: Date;
}
