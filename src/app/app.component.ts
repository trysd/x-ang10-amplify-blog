import { Component, OnInit } from '@angular/core';

import { APIService, ListBlogsQuery } from './API.service';
import * as t from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  blog: t.Blog = {
    id: null,
    name: null
  };

  post: t.Post = {
    id: null,
    title: null,
    blogID: null
  };

  comment: t.Comment = {
    id: null,
    content: null,
    postID: null
  };

  blogList = [];
  postList = [];
  commentList = [];

  constructor(
    private api: APIService
  ) {}

  ngOnInit(): void {

    /** --- blog --- */
    // blogリスト取得
    this.api.ListBlogs().then(e => {
      this.blogList = e.items;
    });
    // blog作成検知
    this.api.OnCreateBlogListener.subscribe(
      (e: any) => this.blogList = [e.value.data.onCreateBlog, ...this.blogList]);

    /** --- post --- */
    // postリスト取得
    this.api.ListPosts().then(e => {
      this.postList = e.items;
      this.post.blogID = this.postList[this.postList.length - 1].blogID; // 最新を選択
    });
    // post作成検知
    this.api.OnCreatePostListener.subscribe(
      (e: any) => this.postList = [e.value.data.onCreatePost, ...this.postList]);

    /** --- comment --- */
    // commentリスト取得
    this.api.ListComments().then(e => {
      this.commentList = e.items;
      this.comment.postID = this.commentList[this.commentList.length - 1].postID; // 最新を選択
    });
    // comment作成検知
    this.api.OnCreateCommentListener.subscribe(
      (e: any) => this.commentList = [e.value.data.onCreateComment, ...this.commentList]);

  }

  /** blogを作成 */
  createBlog(): void {
    this.api.CreateBlog(this.blog)
      .then(e => console.log(e))
      .catch(e => console.log('error creating blog...', e));
  }

  /** postを作成 */
  createPost(): void {
    this.api.CreatePost(this.post)
      .then(e => console.log(e))
      .catch(e => console.log('error creating post...', e));
  }

  /** commentを作成 */
  createComment(): void {
    console.log(this.comment);
    this.api.CreateComment(this.comment)
      .then(e => console.log(e))
      .catch(e => console.log('error creating comment...', e));
  }

}
