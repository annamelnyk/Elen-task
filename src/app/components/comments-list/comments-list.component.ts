import { Component, Input } from '@angular/core';

import { IComment } from 'src/app/types/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent {
  @Input() comments!: IComment[];
}
