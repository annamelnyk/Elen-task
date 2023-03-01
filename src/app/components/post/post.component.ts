import { Component, Input } from '@angular/core';

import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/types/post';
import { IComment } from 'src/app/types/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: IPost;
  public comments: IComment[] = [];
  public isCommentsShown: boolean = false;

  constructor(private postService: PostService) {}

  showComments(post: IPost): void {
    if (this.comments.length) {
      this.isCommentsShown = !this.isCommentsShown;

      return;
    }

    this.postService.getCommentsOfPost(post).subscribe((comments) => {
      this.comments = comments;
      this.isCommentsShown = true;
    });
  }
}
