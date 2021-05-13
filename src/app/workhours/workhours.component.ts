import {Component, OnInit} from '@angular/core';
import {Workhours} from '../services/workhours';
import {WorkhoursService} from '../services/workhours.service';


@Component({
  selector: 'app-workhours',
  templateUrl: './workhours.component.html',
  styleUrls: ['./workhours.component.css']
})
export class WorkhoursComponent implements OnInit {
  workhoursData: Workhours[] = [];

  constructor(private workhourService: WorkhoursService) {
  }

  ngOnInit(): void {
    this.workhourService.getRegistrations().subscribe({
      next: workhours => {
        this.workhoursData = workhours;
      }
    });
  }

}
