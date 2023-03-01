import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/types/post';
import { IComment } from 'src/app/types/comment';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  public posts!: IPost[];
  public comments!: IComment[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => (this.posts = posts));

    console.log(this.posts);
  }

  getPostComments(post: IPost) {
    this.postService
      .getCommentsOfPost(post)
      .subscribe((comments) => (this.comments = comments));
  }
}
