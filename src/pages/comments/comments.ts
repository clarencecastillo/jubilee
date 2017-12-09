import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { PostCommentPage } from '../post-comment/post-comment';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  bar;
  comment: string = "";

  comments = [
    {
      image: "assets/imgs/comments_1.png",
      name: "酸奶丽花",
      comment: "酒吧好赞的！氛围也好，调酒师特别nice！强烈推荐他们家的紫色纯情!",
      time: "2h ago",
      rating: 4
    },
    {
      image: "assets/imgs/comments_2.png",
      name: "伊丽莎白",
      comment: "呜呜呜~他们家的百香果鸡尾酒有点小酸呢~~宝宝牙齿不好。。。不过气氛位置还是很赞的，感兴趣的亲可以试一下!",
      time: "Yesterday",
      rating: 5
    },
    {
      image: "assets/imgs/comments_3.png",
      name: "吃瓜群众",
      comment: "酒吧的歌手唱歌好赞 他们家鸡尾酒颜色搭配也很好看~ 和适合少女心的小仙女们哟~",
      time: "December 3, 2017",
      rating: 3
    },
    {
      image: "assets/imgs/comments_4.png",
      name: "香蕉爸爸",
      comment: "party的好地方!!! 他家的白俄罗斯是我喝过最赞的了!",
      time: "November 28, 2017",
      rating: 4
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController) {
    this.bar = navParams.get('bar');
  }

  presentCommentModal() {
    let popover = this.modalCtrl.create(PostCommentPage);
    popover.present();
    popover.onDidDismiss(commentForm => {

      if (commentForm.valid) {
        let toast = this.toastCtrl.create({
          message: '发表成功!',
          duration: 3000,
          showCloseButton: true,
          closeButtonText: '好的',
          cssClass: 'comment-toast'
        });
        toast.present();
      }
    })
  }

}
