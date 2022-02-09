import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() isLoading = false;
  @Input() isEmpty = false;
  @Input() emptyMessage = 'Aucun élément';




}
