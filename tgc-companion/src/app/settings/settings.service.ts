import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public _club60wedge:number = 85;
  public _club58wedge:number = 90;
  public _club56wedge:number = 95;
  public _club54wedge:number = 100;
  public _club52wedge:number = 105;
  public _clubGapWedge:number = 115;
  public _clubPitchWedge:number = 125;
  public _club9iron:number = 145;
  public _club8iron:number = 160;
  public _club7iron:number = 175;
  public _club6iron:number = 185;
  public _club5iron:number = 195;
  public _club4iron:number = 205;
  public _club3iron:number = 210;
  public _club2iron:number = 215;
  public _clubHybrid5:number = 210;
  public _clubHybrid4:number = 214;
  public _club7wood:number = 220;
  public _club5wood:number = 225;
  public _club3wood:number = 235;
  public _clubDriver:number = 250;

  public defaultClub60wedge:number = 85;
  public defaultClub58wedge:number = 90;
  public defaultClub56wedge:number = 95;
  public defaultClub54wedge:number = 100;
  public defaultClub52wedge:number = 105;
  public defaultClubGapWedge:number = 115;
  public defaultClubPitchWedge:number = 125;
  public defaultClub9iron:number = 145;
  public defaultClub8iron:number = 160;
  public defaultClub7iron:number = 175;
  public defaultClub6iron:number = 185;
  public defaultClub5iron:number = 195;
  public defaultClub4iron:number = 205;
  public defaultClub3iron:number = 210;
  public defaultClub2iron:number = 215;
  public defaultClubHybrid5:number = 210;
  public defaultClubHybrid4:number = 214;
  public defaultClub7wood:number = 220;
  public defaultClub5wood:number = 225;
  public defaultClub3wood:number = 235;
  public defaultClubDriver:number = 250;

  public _hasClub60wedge:boolean = true;
  public _hasClub58wedge:boolean = true;
  public _hasClub56wedge:boolean = true;
  public _hasClub54wedge:boolean = true;
  public _hasClub52wedge:boolean = true;
  public _hasClubGapWedge:boolean = true;
  public _hasClubPitchWedge:boolean = true;
  public _hasClub9iron:boolean = true;
  public _hasClub8iron:boolean = true;
  public _hasClub7iron:boolean = true;
  public _hasClub6iron:boolean = true;
  public _hasClub5iron:boolean = true;
  public _hasClub4iron:boolean = true;
  public _hasClub3iron:boolean = true;
  public _hasClub2iron:boolean = true;
  public _hasClubHybrid5:boolean = true;
  public _hasClubHybrid4:boolean = true;
  public _hasClub7wood:boolean = true;
  public _hasClub5wood:boolean = true;
  public _hasClub3wood:boolean = true;
  public _hasClubDriver:boolean = true;

  private settingsCache = new Map();

  constructor() {
    this.checkLocalStorage();
    window.onbeforeunload = () => this.cacheToStorage();
  }

  setSettingsMap():void {
    this.settingsCache.set("_club60wedge", this._club60wedge);
    this.settingsCache.set("_club58wedge", this._club58wedge);
    this.settingsCache.set("_club56wedge", this._club56wedge);
    this.settingsCache.set("_club54wedge", this._club54wedge);
    this.settingsCache.set("_club52wedge", this._club52wedge);
    this.settingsCache.set("_clubGapWedge", this._clubGapWedge);
    this.settingsCache.set("_clubPitchWedge", this._clubPitchWedge);
    this.settingsCache.set("_club9iron", this._club9iron);
    this.settingsCache.set("_club8iron", this._club8iron);
    this.settingsCache.set("_club7iron", this._club7iron);
    this.settingsCache.set("_club6iron", this._club6iron);
    this.settingsCache.set("_club5iron", this._club5iron);
    this.settingsCache.set("_club4iron", this._club4iron);
    this.settingsCache.set("_club3iron", this._club3iron);
    this.settingsCache.set("_club2iron", this._club2iron);
    this.settingsCache.set("_clubHybrid5", this._clubHybrid5);
    this.settingsCache.set("_clubHybrid4", this._clubHybrid4);
    this.settingsCache.set("_club7wood", this._club7wood);
    this.settingsCache.set("_club5wood", this._club5wood);
    this.settingsCache.set("_club3wood", this._club3wood);
    this.settingsCache.set("_clubDriver", this._clubDriver);

    this.settingsCache.set("_hasClub60wedge", this._hasClub60wedge);
    this.settingsCache.set("_hasClub58wedge", this._hasClub58wedge);
    this.settingsCache.set("_hasClub56wedge", this._hasClub56wedge);
    this.settingsCache.set("_hasClub54wedge", this._hasClub54wedge);
    this.settingsCache.set("_hasClub52wedge", this._hasClub52wedge);
    this.settingsCache.set("_hasClubGapWedge", this._hasClubGapWedge);
    this.settingsCache.set("_hasClubPitchWedge", this._hasClubPitchWedge);
    this.settingsCache.set("_hasClub9iron", this._hasClub9iron);
    this.settingsCache.set("_hasClub8iron", this._hasClub8iron);
    this.settingsCache.set("_hasClub7iron", this._hasClub7iron);
    this.settingsCache.set("_hasClub6iron", this._hasClub6iron);
    this.settingsCache.set("_hasClub5iron", this._hasClub5iron);
    this.settingsCache.set("_hasClub4iron", this._hasClub4iron);
    this.settingsCache.set("_hasClub3iron", this._hasClub3iron);
    this.settingsCache.set("_hasClub2iron", this._hasClub2iron);
    this.settingsCache.set("_hasClubHybrid5", this._hasClubHybrid5);
    this.settingsCache.set("_hasClubHybrid4", this._hasClubHybrid4);
    this.settingsCache.set("_hasClub7wood", this._hasClub7wood);
    this.settingsCache.set("_hasClub5wood", this._hasClub5wood);
    this.settingsCache.set("_hasClub3wood", this._hasClub3wood);
    this.settingsCache.set("_hasClubDriver", this._hasClubDriver);
  }

  returnToDefaults():void {
    this._club60wedge = this.defaultClub60wedge;
    this._club58wedge = this.defaultClub58wedge;
    this._club56wedge = this.defaultClub56wedge;
    this._club54wedge = this.defaultClub54wedge;
    this._club52wedge = this.defaultClub52wedge;
    this._clubGapWedge = this.defaultClubGapWedge;
    this._clubPitchWedge = this.defaultClubPitchWedge;
    this._club9iron = this.defaultClub9iron;
    this._club8iron = this.defaultClub8iron;
    this._club7iron = this.defaultClub7iron;
    this._club6iron = this.defaultClub6iron;
    this._club5iron = this.defaultClub5iron;
    this._club4iron = this.defaultClub4iron;
    this._club3iron = this.defaultClub3iron;
    this._club2iron = this.defaultClub2iron;
    this._clubHybrid5 = this.defaultClubHybrid5;
    this._clubHybrid4 = this.defaultClubHybrid4;
    this._club7wood = this.defaultClub7wood;
    this._club5wood = this.defaultClub5wood;
    this._club3wood = this.defaultClub3wood;
    this._clubDriver = this.defaultClubDriver;

    this._hasClub60wedge = true;
    this._hasClub58wedge = true;
    this._hasClub56wedge = true;
    this._hasClub54wedge = true;
    this._hasClub52wedge = true;
    this._hasClubGapWedge = true;
    this._hasClubPitchWedge = true;
    this._hasClub9iron = true;
    this._hasClub8iron = true;
    this._hasClub7iron = true;
    this._hasClub6iron = true;
    this._hasClub5iron = true;
    this._hasClub4iron = true;
    this._hasClub3iron = true;
    this._hasClub2iron = true;
    this._hasClubHybrid5 = true;
    this._hasClubHybrid4 = true;
    this._hasClub7wood = true;
    this._hasClub5wood = true;
    this._hasClub3wood = true;
    this._hasClubDriver = true;

  }

  loadSettings():void {
    this._club60wedge = this.settingsCache.get("_club60wedge");
    this._club58wedge = this.settingsCache.get("_club58wedge");
    this._club56wedge = this.settingsCache.get("_club56wedge");
    this._club54wedge = this.settingsCache.get("_club54wedge");
    this._club52wedge = this.settingsCache.get("_club52wedge");
    this._clubGapWedge = this.settingsCache.get("_clubGapWedge");
    this._clubPitchWedge = this.settingsCache.get("_clubPitchWedge");
    this._club9iron = this.settingsCache.get("_club9iron");
    this._club8iron = this.settingsCache.get("_club8iron");
    this._club7iron = this.settingsCache.get("_club7iron");
    this._club6iron = this.settingsCache.get("_club6iron");
    this._club5iron = this.settingsCache.get("_club5iron");
    this._club4iron = this.settingsCache.get("_club4iron");
    this._club3iron = this.settingsCache.get("_club3iron");
    this._club2iron = this.settingsCache.get("_club2iron");
    this._clubHybrid5 = this.settingsCache.get("_clubHybrid5");
    this._clubHybrid4 = this.settingsCache.get("_clubHybrid4");
    this._club7wood = this.settingsCache.get("_club7wood");
    this._club5wood = this.settingsCache.get("_club5wood");
    this._club3wood = this.settingsCache.get("_club3wood");
    this._clubDriver = this.settingsCache.get("_clubDriver");

    this._hasClub60wedge = this.settingsCache.get("_hasClub60wedge");
    this._hasClub58wedge = this.settingsCache.get("_hasClub58wedge");
    this._hasClub56wedge = this.settingsCache.get("_hasClub56wedge");
    this._hasClub54wedge = this.settingsCache.get("_hasClub54wedge");
    this._hasClub52wedge = this.settingsCache.get("_hasClub52wedge");
    this._hasClubGapWedge = this.settingsCache.get("_hasClubGapWedge");
    this._hasClubPitchWedge = this.settingsCache.get("_hasClubPitchWedge");
    this._hasClub9iron = this.settingsCache.get("_hasClub9iron");
    this._hasClub8iron = this.settingsCache.get("_hasClub8iron");
    this._hasClub7iron = this.settingsCache.get("_hasClub7iron");
    this._hasClub6iron = this.settingsCache.get("_hasClub6iron");
    this._hasClub5iron = this.settingsCache.get("_hasClub5iron");
    this._hasClub4iron = this.settingsCache.get("_hasClub4iron");
    this._hasClub3iron = this.settingsCache.get("_hasClub3iron");
    this._hasClub2iron = this.settingsCache.get("_hasClub2iron");
    this._hasClubHybrid5 = this.settingsCache.get("_hasClubHybrid5");
    this._hasClubHybrid4 = this.settingsCache.get("_hasClubHybrid4");
    this._hasClub7wood = this.settingsCache.get("_hasClub7wood");
    this._hasClub5wood = this.settingsCache.get("_hasClub5wood");
    this._hasClub3wood = this.settingsCache.get("_hasClub3wood");
    this._hasClubDriver = this.settingsCache.get("_hasClubDriver");
  }

  checkLocalStorage():void {
    const userSettings = localStorage.getItem('tgc-settings');

    if(userSettings)
    {
      this.settingsCache = new Map(JSON.parse(userSettings));
      this.loadSettings();
    }else this.returnToDefaults();
  }

  cacheToStorage():void {
    this.setSettingsMap();
    const serialized = JSON.stringify(Array.from(this.settingsCache.entries()));
    localStorage.setItem('tgc-settings', serialized);
  }

  get club60wedge():number { return this._club60wedge; }
  get club58wedge():number { return this._club58wedge; }
  get club56wedge():number { return this._club56wedge; }
  get club54wedge():number { return this._club54wedge; }
  get club52wedge():number { return this._club52wedge; }
  get clubGapWedge():number { return this._clubGapWedge; }
  get clubPitchWedge():number { return this._clubPitchWedge; }

  get club9iron():number { return this._club9iron; }
  get club8iron():number { return this._club8iron; }
  get club7iron():number { return this._club7iron; }
  get club6iron():number { return this._club6iron; }
  get club5iron():number { return this._club5iron; }
  get club4iron():number { return this._club4iron; }
  get club3iron():number { return this._club3iron; }
  get club2iron():number { return this._club2iron; }

  get clubHybrid5():number { return this._clubHybrid5; }
  get clubHybrid4():number { return this._clubHybrid4; }

  get club7wood():number { return this._club7wood; }
  get club5wood():number { return this._club5wood; }
  get club3wood():number { return this._club3wood; }
  get clubDriver():number { return this._clubDriver; }

  set club60wedge(value:number) { this._club60wedge = value; }
  set club58wedge(value:number) { this._club58wedge = value; }
  set club56wedge(value:number) { this._club56wedge = value; }
  set club54wedge(value:number) { this._club54wedge = value; }
  set club52wedge(value:number) { this._club52wedge = value; }
  set clubGapWedge(value:number) { this._clubGapWedge = value; }
  set clubPitchWedge(value:number) { this._clubPitchWedge = value; }

  set club9iron(value:number) { this._club9iron = value; }
  set club8iron(value:number) { this._club8iron = value; }
  set club7iron(value:number) { this._club7iron = value; }
  set club6iron(value:number) { this._club6iron = value; }
  set club5iron(value:number) { this._club5iron = value; }
  set club4iron(value:number) { this._club4iron = value; }
  set club3iron(value:number) { this._club3iron = value; }
  set club2iron(value:number) { this._club2iron = value; }

  set clubHybrid5(value:number) { this._clubHybrid5 = value; }
  set clubHybrid4(value:number) { this._clubHybrid4 = value; }

  set club7wood(value:number) { this._club7wood = value; }
  set club5wood(value:number) { this._club5wood = value; }
  set club3wood(value:number) { this._club3wood = value; }
  set clubDriver(value:number) { this._clubDriver = value; }

  get hasClub60wedge():boolean { return this._hasClub60wedge; }
  get hasClub58wedge():boolean { return this._hasClub58wedge; }
  get hasClub56wedge():boolean { return this._hasClub56wedge; }
  get hasClub54wedge():boolean { return this._hasClub54wedge; }
  get hasClub52wedge():boolean { return this._hasClub52wedge; }
  get hasClubGapWedge():boolean { return this._hasClubGapWedge; }
  get hasClubPitchWedge():boolean { return this._hasClubPitchWedge; }

  get hasClub9iron():boolean { return this._hasClub9iron; }
  get hasClub8iron():boolean { return this._hasClub8iron; }
  get hasClub7iron():boolean { return this._hasClub7iron; }
  get hasClub6iron():boolean { return this._hasClub6iron; }
  get hasClub5iron():boolean { return this._hasClub5iron; }
  get hasClub4iron():boolean { return this._hasClub4iron; }
  get hasClub3iron():boolean { return this._hasClub3iron; }
  get hasClub2iron():boolean { return this._hasClub2iron; }

  get hasClubHybrid5():boolean { return this._hasClubHybrid5; }
  get hasClubHybrid4():boolean { return this._hasClubHybrid4; }

  get hasClub7wood():boolean { return this._hasClub7wood; }
  get hasClub5wood():boolean { return this._hasClub5wood; }
  get hasClub3wood():boolean { return this._hasClub3wood; }
  get hasClubDriver():boolean { return this._hasClubDriver; }

  set hasClub60wedge(value:boolean) { this._hasClub60wedge = value; }
  set hasClub58wedge(value:boolean) { this._hasClub58wedge = value; }
  set hasClub56wedge(value:boolean) { this._hasClub56wedge = value; }
  set hasClub54wedge(value:boolean) { this._hasClub54wedge = value; }
  set hasClub52wedge(value:boolean) { this._hasClub52wedge = value; }
  set hasClubGapWedge(value:boolean) { this._hasClubGapWedge = value; }
  set hasClubPitchWedge(value:boolean) { this._hasClubPitchWedge = value; }

  set hasClub9iron(value:boolean) { this._hasClub9iron = value; }
  set hasClub8iron(value:boolean) { this._hasClub8iron = value; }
  set hasClub7iron(value:boolean) { this._hasClub7iron = value; }
  set hasClub6iron(value:boolean) { this._hasClub6iron = value; }
  set hasClub5iron(value:boolean) { this._hasClub5iron = value; }
  set hasClub4iron(value:boolean) { this._hasClub4iron = value; }
  set hasClub3iron(value:boolean) { this._hasClub3iron = value; }
  set hasClub2iron(value:boolean) { this._hasClub2iron = value; }

  set hasClubHybrid5(value:boolean) { this._hasClubHybrid5 = value; }
  set hasClubHybrid4(value:boolean) { this._hasClubHybrid4 = value; }

  set hasClub7wood(value:boolean) { this._hasClub7wood = value; }
  set hasClub5wood(value:boolean) { this._hasClub5wood = value; }
  set hasClub3wood(value:boolean) { this._hasClub3wood = value; }
  set hasClubDriver(value:boolean) { this._hasClubDriver = value; }

  findOptimalClub(yardage:number):string {
    let clubs = [
                 {name: "60 Wedge", value: this._club60wedge},
                 {name: "58 Wedge", value: this._club58wedge},
                 {name: "56 Wedge", value: this._club56wedge},
                 {name: "54 Wedge", value: this._club54wedge},
                 {name: "52 Wedge", value: this._club52wedge},
                 {name: "Gap Wedge", value: this._clubGapWedge},
                 {name: "Pitch Wedge", value: this._clubPitchWedge},
                 {name: "9 Iron", value: this._club9iron},
                 {name: "8 Iron", value: this._club8iron},
                 {name: "7 Iron", value: this._club7iron},
                 {name: "6 Iron", value: this._club6iron},
                 {name: "5 Iron", value: this._club5iron},
                 {name: "4 Iron", value: this._club4iron},
                 {name: "3 Iron", value: this._club3iron},
                 {name: "2 Iron", value: this._club2iron},
                 {name: "Hybrid 5 Iron", value: this._clubHybrid5},
                 {name: "Hybrid 4 Iron", value: this._clubHybrid4},
                 {name: "7 Wood", value: this._club7wood},
                 {name: "5 Wood", value: this._club5wood},
                 {name: "3 Wood", value: this._club3wood},
                 {name: "Driver", value: this._clubDriver}
               ];
    const closest:any = clubs.reduce((a:any, b:any) => {
      return Math.abs(b.value - yardage) < Math.abs(a.value - yardage) ? b : a;
    });
    return closest.name;
  }
}
