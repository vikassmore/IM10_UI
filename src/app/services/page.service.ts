import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PageService {
  currentPage: number = 1;
}