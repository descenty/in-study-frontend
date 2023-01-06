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
  image: string;
  price: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  users: IUser[];
  reviews: IReview[];
}
