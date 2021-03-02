import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public yardage:number = 0;
  public playingYardage:number = 0;
  public windSpeed:number = 0;
  public windDirection:string = "Tailwind";
  public elevation:number = 0;
  public rough:string = "None";
  public bunker:string = "false";
  public recommendedClub:string = "";

  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {

  }

  getResults() {
    this.calculate();
    this.recommendedClub = this.settingsService.findOptimalClub(this.playingYardage);
  }

  calculate() {
    const windCalc2 = this.windDirection === "Headwind" ? 1.5 : -1.5;
    const windCalc1 = this.windSpeed * windCalc2;
    const finalWindCalc = windCalc1 / 3.0;

    const elevationArr = [
      1,
      this.yardage > 50 ? -0.05 : 0,
      this.yardage > 75 ? -0.05 : 0,
      this.yardage > 100 ? -0.05 : 0,
      this.yardage > 125 ? -0.05 : 0,
      this.yardage > 150 ? -0.05 : 0,
      this.yardage > 175 ? -0.05 : 0,
      this.yardage > 200 ? -0.05 : 0,
      this.yardage > 225 ? -0.05 : 0,
      this.yardage > 250 ? -0.05 : 0
    ];
    const elevationCalc = ((this.elevation / 3) * 1) * elevationArr.reduce((a, b) => a + b, 0);

    let roughCalc = 0;
    if(this.rough === "Light Rough") roughCalc = 0.07;
    else if(this.rough === "Heavy Rough") roughCalc = 0.14;
    const finalRoughCalc = roughCalc * this.yardage;

    let bunkerCalc = 0;
    if(this.bunker == "true" && this.yardage <= 40) bunkerCalc = 0.4;
    else if(this.bunker == "true" && this.yardage > 40) bunkerCalc = 0.06;
    const finalBunkerCalc = bunkerCalc * this.yardage;

    console.log(this.yardage);
    console.log(this.elevation);
    console.log(this.windSpeed);
    console.log(this.windDirection);
    console.log(this.bunker);
    console.log(this.rough);
    console.log("-----");
    console.log(finalWindCalc);
    console.log(finalRoughCalc);
    console.log(finalBunkerCalc);
    console.log(elevationCalc);

    this.playingYardage = this.yardage + finalWindCalc + elevationCalc + finalRoughCalc + finalBunkerCalc;
  }

  /*
  playing yardage = Sum of calcs + yardage
  Wind Calc 1:	wind speed * wind calc 2
  Wind Calc 2:	if headwind ? 1.5 : -1.5
  Final Wind Calc: Wind Calc 2 / 3
  Elevation Calc:	()(elevation / 3) * 1) * 0.65
  Rough Calc:	light rough ? val = 0.07 : heavy rough ? val = 0.14 : 0
              final = 1 + val * yardage
  Bunker Calc: if bunker and yardage <= 40 then val = 0.4
               if bunker and yardage > 40 then val = 0.06
               final = 1 + val * yardage
  */

}
