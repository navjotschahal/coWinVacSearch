import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Utility } from 'src/app/shared/Utility/utility';
import { CowinQueryService } from '../services/cowin-query.service';
import {Howl, Howler} from 'howler';
import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { delay, delayWhen, finalize, map, retryWhen, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Cowin } from '../models/cowin-vac-data.interface';
import { timer } from 'rxjs/internal/observable/timer';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-search-cowin-center',
  templateUrl: './search-cowin-center.component.html',
  styleUrls: ['./search-cowin-center.component.css']
})
export class SearchCowinCenterComponent implements OnInit {

  pinCode: number;
  audio: Howl;
  snackReference: MatSnackBarRef<any>;
  searchButtonFlag: boolean;

  constructor(
    private cowinQueryService: CowinQueryService,
    private _snackBar: MatSnackBar
  ) {
    this.pinCode = 0;
    this.searchButtonFlag = false;
    this.audio = new Howl({src: ['']});
  }

  ngOnInit(): void {
  }

  

  findAvailableCowinVacCenter = () => {
    this.searchButtonFlag = true;
    this.audio.stop();
    let date: Date = new Date();
    let dateStr: string = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    let $cowinSearchApi: Observable<Cowin.CenterList> = this.cowinQueryService.getAvailableVaccacineCenters(this.pinCode, dateStr);
    let stopRetry: boolean = false;
    let customRetryCode = "Center Not Found !";
    let timer_Rx = timer(6 * 1000);
    let killTimer: Subject<any> = new Subject();

    let sub: Subscription = $cowinSearchApi.pipe(
      map(res => {
        // res.centers[0].sessions[0].available_capacity = 1;
        if (!Utility.anyCenterWithAvailableSlot(res.centers) && !stopRetry) {
          //error will be picked up by retryWhen
          throw customRetryCode;
        }
        return res;
      }), retryWhen(errors =>
        errors.pipe(
          //log error message
          tap(
            (e) => {
              if (e === customRetryCode) {
                this._snackBar.open('Oh Sorry! No Slots available , searching again in 6 seconds.... ', 'Cancel Search').onAction().subscribe(() => {
                  stopRetry = true;
                  this.searchButtonFlag = false;
                  $cowinSearchApi.pipe(takeUntil(killTimer));
                  killTimer.next(1);
                  sub.unsubscribe();
                  console.log('Is Cowin Subscription Closed or ? : ', sub.closed);
                })
              } else {
                throw e;
              }
            }
          ),
          //restart in 6 seconds
          delayWhen(() => timer_Rx)
        )
      ),
      finalize(() => {
        this.searchButtonFlag = false;
      })
    ).subscribe( res => {
      if(!stopRetry) {  
        this.audio = Utility.createHowl(['assets/audios/Co-win_VaccacineAvailable_Female_voice_eng.mp3']);
        this.audio.stop();
        this.audio.play();
        this.snackReference = this._snackBar.open('Go to book now center is available!', 'Book', {duration: 50000});
        this.snackReference.onAction().subscribe(() => {
          this.audio.stop();
          window.open('https://selfregistration.cowin.gov.in/','_newtab');
        });
      }  
    }, error => {
      this._snackBar.open('BAD_REQUEST API_ERROR');
      console.error(error);
    });

    timer_Rx.subscribe(() => console.log('In Timer Rx:'));

  }

}
