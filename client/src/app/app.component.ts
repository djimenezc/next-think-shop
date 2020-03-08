import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {convertObjectToArray, convertToMap, Item} from './app.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items$: Observable<string>;
  items: any[] = [];
  selectedItems: Item[] = [];

  constructor(http: HttpClient) {
    this.items$ = http.get(
      `${environment.apiUrl}/items/list`,
      {responseType: 'text'}
    );
    this.items$.subscribe((items: string) => {
      this.items = convertToMap(items);
    });
  }

  getItems(map: object[]): Item[] {
    return convertObjectToArray(map);
  }

  onCheckboxChange(e, valueParam) {
    const value = valueParam || e.target.value;
    console.log('checked', value);

    this.items[value].selected = !this.items[value].selected;

    let found = false;
    this.selectedItems = this.selectedItems.filter(x => {
      if (x.value === value) {
        found = true;
      }
      return x.value !== value;
    });

    if (!found) {
      this.selectedItems.push(this.items[value]);
    }
  }

  onRemove(e) {
    const value = e.target.parentElement.value;
    console.log('onRemove', value);
    this.onCheckboxChange(e, value);
  }

  onEdit(e) {
    const value = e.target.parentElement.value || e.target.value;
    console.log('onEdit', value);
    this.items[value].editing = !this.items[value].editing;
  }

  onNameChange(e) {
    const name = e.target.value;
    const id = e.target.name.split('-')[2];
    console.log('onNameChange', name, id);

    this.items[id].editing = false;
    this.items[id].name = name;
  }
}
