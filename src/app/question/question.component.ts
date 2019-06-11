import { Component, OnInit, } from '@angular/core';
import { ParseJsonService } from '../service/parse-json.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  data: any;

  constructor(private parseJsonService: ParseJsonService) {}

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.parseJsonService.getData().subscribe(elem => {
        this.data = elem;
      });
  }

}
