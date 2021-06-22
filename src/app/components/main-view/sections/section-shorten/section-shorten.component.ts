import { Component, OnInit } from '@angular/core';
import { ShorteningServiceService } from 'src/app/services/shortening-service.service';

@Component({
  selector: 'app-section-shorten',
  templateUrl: './section-shorten.component.html',
  styleUrls: ['./section-shorten.component.css']
})
export class SectionShortenComponent implements OnInit {

  inputValue: any;
  shortenList = null;
  shortenPair = {
    original: null,
    short: null
  };

  constructor(
    private shortenService : ShorteningServiceService,
  ) { }

  ngOnInit(): void {
    this.shortenList = JSON.parse(localStorage.getItem("shortenList"));    
  }

  shortenIt(){
    console.log("entrada: "+this.inputValue);
    this.shortenService.getShort(this.inputValue)
      .subscribe(
        r => {
          console.log("resposta: "+r)
          this.shortenPair.original = this.inputValue;
          this.shortenPair.short = r.result.short_link;
          this.saveShortens();
        },
        e => console.log("error: "+e)
        );
  }

  saveShortens(){         
      let arrayList = [];      
      if (this.shortenList != null) {
        arrayList = this.shortenList;
      }
      arrayList.push(this.shortenPair);
      localStorage.setItem("shortenList", JSON.stringify(arrayList));
      this.shortenList = arrayList;
      console.log(localStorage.getItem("shortenList"))
  }

}
