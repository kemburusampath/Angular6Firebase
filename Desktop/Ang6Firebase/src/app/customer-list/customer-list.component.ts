import { CustomerService } from './../shared/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  searchText: any;

  constructor(private customerService: CustomerService) { }
  customerArray = [];
  showDeletedMessages: boolean;

  ngOnInit() {
    this.customerService.getCustomer().subscribe(list => {
      this.customerArray = list.map(items => {
        return {
          $key: items.key,
          ...items.payload.val()
        }
      })
    });
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
      this.customerService.deleteCustomer($key);
      setTimeout(() => this.showDeletedMessages = false,3000);
    }
  }

  filterCondition(customer){
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
