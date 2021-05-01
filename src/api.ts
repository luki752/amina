const mainUrl = "http://localhost:3000/";

export const subaminsUrl = `${mainUrl}subamins`;
export const feed = (what: string, order: string) =>
  `${mainUrl}posts?_sort=${what}&_order=${order}`;

export const postsUrl = (what: string, order: string) =>
  `${mainUrl}posts?_sort=${what}&_order=${order}`;

export const postDetails = (id: number) => `${mainUrl}posts/${id}`;
export const subaminDetails = (id: number) => `${mainUrl}subamins/${id}`;

export const subaminsSearch = (question: string, what: string, order: string) =>
  `${mainUrl}subamins?q=${question}&_sort=${what}&_order=${order}`;

export const postSearch = (question: string, what: string, order: string) =>
  `${mainUrl}posts?q=${question}&_sort=${what}&_order=${order}`;
export const subaminsPosts = (id: number, what: string, order: string) =>
  `${mainUrl}posts?subamindId=${id}&_sort=${what}&_order=${order}`;
export const loginUrl = (username: string) =>
  `${mainUrl}users?username=${username}`;
export const userDetails = (id: number) => `${mainUrl}users/${id}`;
