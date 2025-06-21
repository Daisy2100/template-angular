import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NavigationItem {
  id: string;
  displayName: string;
  path: string;
  order?: number;
  isActive?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  /**
   * 取得導航選單項目
   * @returns Observable<NavigationItem[]>
   */
  getNavigationItems(): Observable<NavigationItem[]> {
    // 直接回傳預設的導航項目
    return of(this.getDefaultNavigationItems());
  }  /**
   * 取得預設的導航項目
   * @returns NavigationItem[]
   */
  getDefaultNavigationItems(): NavigationItem[] {
    return [
      { id: 'home', displayName: '首頁', path: '/', order: 0 },
      { id: 'about', displayName: '關於我們', path: '/about', order: 1 },
      { id: 'news', displayName: '最新消息', path: '/news', order: 2 },
      { id: 'contact', displayName: '聯絡我們', path: '/contact', order: 3 }
    ];
  }

  /**
   * 根據順序排序導航項目
   * @param items NavigationItem[]
   * @returns NavigationItem[]
   */
  sortNavigationItems(items: NavigationItem[]): NavigationItem[] {
    return items.sort((a, b) => (a.order || 0) - (b.order || 0));
  }
}
