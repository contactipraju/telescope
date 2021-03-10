export interface IPost {
  id?: string,
  title?: string;
  author?: string;
  email?: string;
  description?: string;
  content?: string;
  type?: string;
  category?: string;
  subcategory?: string;
  related?: string[];
  dateWritten?: Date;
  datePosted?: Date;
  dateWrittenFormatted?: string;
  datePostedFormatted?: string;
  notes?: string;
  image?: string;
}
