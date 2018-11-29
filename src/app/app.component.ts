import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

export interface CardInfo {
  title: string;
  body: string;
  imageUrl: string;
  LastUpdated: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  MapUrl: string = "";
  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
    this.MapUrl = environment.MapUrl;
  }
  title = environment.Title;
  isMakeMoney: boolean = environment.IsMakeMoney;
  domain = environment.Domain;
  address1 = environment.AddressLine1;
  address2 = environment.AddressLine2;
  TfnClicktoCall = this.replaceph(environment.TfnClickToCall);
  Tfn = this.replaceph(environment.TfnNumbers);
  contactNumber = environment.ContactNumber;
  logoImage = this.isMakeMoney ? environment.companyLogo.money : environment.companyLogo.normal;
  bodyImage = this.isMakeMoney ? environment.producImage.money : environment.producImage.normal;
  bannerImage = this.isMakeMoney ? environment.bannerImage.money : environment.bannerImage.normal;
  cardDeckTitle = this.isMakeMoney ? environment.CardDeckTitle.money : environment.CardDeckTitle.normal;
  CTATitle = environment.CTATitle;

  Disclaimer = this.isMakeMoney ? environment.disclaimer.money : environment.disclaimer.normal;
  lastUpdated = "Last updated 3 mins ago";
  cardsDeck1: CardInfo[] = [{ title: environment.CARD1.Title, imageUrl: environment.CARD1.ImageUrl, body: environment.CARD1.Body, LastUpdated: this.lastUpdated },
  { title: environment.CARD2.Title, imageUrl: environment.CARD2.ImageUrl, body: environment.CARD2.Body, LastUpdated: this.lastUpdated },
  { title: environment.CARD3.Title, imageUrl: environment.CARD3.ImageUrl, body: environment.CARD3.Body, LastUpdated: this.lastUpdated }];
  cardsDeck2: CardInfo[] = [
    { title: environment.CARD4.Title, imageUrl: environment.CARD4.ImageUrl, body: environment.CARD4.Body, LastUpdated: this.lastUpdated },
    { title: environment.CARD5.Title, imageUrl: environment.CARD5.ImageUrl, body: environment.CARD5.Body, LastUpdated: this.lastUpdated },
    { title: environment.CARD6.Title, imageUrl: environment.CARD6.ImageUrl, body: environment.CARD6.Body, LastUpdated: this.lastUpdated }];

  

  replaceph(ph: string) {
    const replaced = ph.split("A").join("")
    return replaced;
  }
}
