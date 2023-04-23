import { Component, OnInit } from "@angular/core";
import { Exercises } from "src/app/constants/exercises";
import { Exercise } from "src/app/models/exercise";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: 'exercise-list',
  templateUrl: 'exercise-list.component.html',
  styleUrls: ['exercise.component.scss']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.shuffle();
  }

  shuffle() {
    const pickedIndices: number[] = [];
    while(this.exercises.length != 4) {
      const randomInt = CommonService.getRandomInt(Exercises.length - 1);
      if (pickedIndices.includes(randomInt)) {
        return;
      }
      pickedIndices.push(randomInt);
      this.exercises.push(Exercises[randomInt]);
    }
  }
}
