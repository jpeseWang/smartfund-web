import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Route[] = [
  {
    path: '',
    component: BlogsComponent,
  },
  {
    path: ':id',
    component: BlogPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
