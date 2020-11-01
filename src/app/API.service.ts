/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  blogID: string;
  createdAt?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  blogID?: string | null;
  createdAt?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
  createdAt?: string | null;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
  createdAt?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type CreateTestInput = {
  id?: string | null;
};

export type ModeltestConditionInput = {
  and?: Array<ModeltestConditionInput | null> | null;
  or?: Array<ModeltestConditionInput | null> | null;
  not?: ModeltestConditionInput | null;
};

export type UpdateTestInput = {
  id: string;
};

export type DeleteTestInput = {
  id?: string | null;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModeltestFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModeltestFilterInput | null> | null;
  or?: Array<ModeltestFilterInput | null> | null;
  not?: ModeltestFilterInput | null;
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  blogID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePostFilterInput | null> | null;
  or?: Array<SearchablePostFilterInput | null> | null;
  not?: SearchablePostFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  blogID = "blogID",
  createdAt = "createdAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type CreateTestMutation = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTestMutation = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTestMutation = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null;
    content: string;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTestQuery = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTestsQuery = {
  __typename: "ModeltestConnection";
  items: Array<{
    __typename: "test";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type SearchPostsQuery = {
  __typename: "SearchablePostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnCreateTestSubscription = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTestSubscription = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTestSubscription = {
  __typename: "test";
  id: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateTest(
    input: CreateTestInput,
    condition?: ModeltestConditionInput
  ): Promise<CreateTestMutation> {
    const statement = `mutation CreateTest($input: CreateTestInput!, $condition: ModeltestConditionInput) {
        createTest(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTestMutation>response.data.createTest;
  }
  async UpdateTest(
    input: UpdateTestInput,
    condition?: ModeltestConditionInput
  ): Promise<UpdateTestMutation> {
    const statement = `mutation UpdateTest($input: UpdateTestInput!, $condition: ModeltestConditionInput) {
        updateTest(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTestMutation>response.data.updateTest;
  }
  async DeleteTest(
    input: DeleteTestInput,
    condition?: ModeltestConditionInput
  ): Promise<DeleteTestMutation> {
    const statement = `mutation DeleteTest($input: DeleteTestInput!, $condition: ModeltestConditionInput) {
        deleteTest(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTestMutation>response.data.deleteTest;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            post {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetTest(id: string): Promise<GetTestQuery> {
    const statement = `query GetTest($id: ID!) {
        getTest(id: $id) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTestQuery>response.data.getTest;
  }
  async ListTests(
    filter?: ModeltestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTestsQuery> {
    const statement = `query ListTests($filter: ModeltestFilterInput, $limit: Int, $nextToken: String) {
        listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTestsQuery>response.data.listTests;
  }
  async SearchPosts(
    filter?: SearchablePostFilterInput,
    sort?: SearchablePostSortInput,
    limit?: number,
    nextToken?: string,
    from?: number
  ): Promise<SearchPostsQuery> {
    const statement = `query SearchPosts($filter: SearchablePostFilterInput, $sort: SearchablePostSortInput, $limit: Int, $nextToken: String, $from: Int) {
        searchPosts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from) {
          __typename
          items {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchPostsQuery>response.data.searchPosts;
  }
  OnCreateBlogListener: Observable<
    SubscriptionResponse<OnCreateBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBlog {
        onCreateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBlogSubscription>>;

  OnUpdateBlogListener: Observable<
    SubscriptionResponse<OnUpdateBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBlog {
        onUpdateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBlogSubscription>>;

  OnDeleteBlogListener: Observable<
    SubscriptionResponse<OnDeleteBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBlog {
        onDeleteBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBlogSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;

  OnCreateTestListener: Observable<
    SubscriptionResponse<OnCreateTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTest {
        onCreateTest {
          __typename
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTestSubscription>>;

  OnUpdateTestListener: Observable<
    SubscriptionResponse<OnUpdateTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTest {
        onUpdateTest {
          __typename
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTestSubscription>>;

  OnDeleteTestListener: Observable<
    SubscriptionResponse<OnDeleteTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTest {
        onDeleteTest {
          __typename
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTestSubscription>>;
}
