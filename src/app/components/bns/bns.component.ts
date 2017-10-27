import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-bns',
  templateUrl: './bns.component.html',
  styleUrls: ['./bns.component.css']
})
export class BnsComponent implements OnInit {

  private isEditable: boolean = true;
  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];
  private photoList: Photo[];

  constructor(private getphotoService: GetphotoService) { }

  ngOnInit() {
    this.my_name = "Warat Saikij"
    this.age = 21;
    this.email = "penguinza@gmail.com";
    this.address = {
      street: "69 Ratchada Posidon",
      city: "Rachada",
      province: "Bangkok",
      postcode: "10400"
    }
    this.skills = ["Blade Master", "Destroyer", "Summoner", "Assasin", "Kung Fu Master"];

    /*this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4, 4995);
    });*/
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }


}
