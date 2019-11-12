import { Component, OnInit }   from '@angular/core';
import { BsModalRef }          from 'ngx-bootstrap/modal';
import { Store }               from '@ngrx/store';
import * as moment             from 'moment';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { IPost }              from 'src/app/models/post.interface';
import { IConfig }            from 'src/app/models/config.interface';

import { IAppState }          from 'src/app/store/state/app.state';
import { DeletePost }         from 'src/app/store/actions/post.actions';
import { PostService }        from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  mode: string;
  post: IPost;
  posts: IPost[];
  config: IConfig;

  categories = [
    { link: "none",            text: "Select Category" },
    { link: "general_science", text: "General Science" },
    { link: "life_sciences",   text: "Life Sciences" },
    { link: "social_sciences", text: "Social Sciences" },
    { link: "miscellaneous",   text: "Miscellaneous" },
    { link: "pseudoscience",   text: "PseudoScience" }
  ];

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
  };

  subcategories = [
    { link: "none", text: "Select Subcategory" }
  ];

  showDeleteConfirmation: boolean = false;
  htmlContent: string;

  constructor(
    private _store: Store<IAppState>,
    private _postService: PostService,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('EditPostComponent - ngOnInit: ', this.post);

    if(!this.post.category) {
      this.post.category = this.categories[0].link;
    }

    this._postService.getPost(this.post).subscribe(result => {
      this.htmlContent = decodeURI(result.description);
    });

    this.onCategoryChange();
  }

  onCategoryChange() {
    console.log("EditPostComponent - onCategoryChange: ", this.post.category);

    if(this.post.category === "none") {
      this.post.subcategory = "none";
    }
    else if(this.config && this.config['menu_layout']) {
      let section = this.config['menu_layout'][this.post.category];

      for(let i=0; i<section.length; i++) {
        if(section[i].link === this.post.category && section[i].children && section[i].children.length) {

          for(let j=0; j<section[i].children.length; j++) {
            this.subcategories.push(section[i].children[j]);
          }

          break;
        }
      }
    }
  }

  savePost() {
    this.post.description = encodeURI(this.htmlContent); // TODO: Instead save to he article using post.id

    console.log('EditPostComponent - savePost: ', this.post);

    this.modalRef.hide();
  }

  deletePost() {
    console.log('EditPostComponent - deletePost: ', this.post);

    this._store.dispatch(new DeletePost(this.post));

    this.modalRef.hide();
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
