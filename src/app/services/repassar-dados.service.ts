import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class RepassarDadosService {

  constructor() { }

  postsUser: Post;


  setPostsUser(userPosts: Post){
    this.postsUser = userPosts;
  }

  getPostUser(){
    return this.postsUser;
  }

}
