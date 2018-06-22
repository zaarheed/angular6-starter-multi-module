import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recent-submissions',
    templateUrl: './recent-submissions.component.html',
    styleUrls: ['./recent-submissions.component.scss']
})
export class RecentSubmissionsComponent implements OnInit {
    submissions: Array<{}>;

    constructor() { }

    ngOnInit() {
        this.initSubmissions();
    }

    initSubmissions() {
        this.submissions = [
            { name: 'John', email: 'john@angular6-starter-multi-module.com' },
            { name: 'Samantha', email: 'sam@angular6-starter-multi-module.com' },
            { name: 'Cassandra', email: 'cass@angular6-starter-multi-module.com' },
            { name: 'Taylor', email: 'taylor@angular6-starter-multi-module.com' },
            { name: 'Fatima', email: 'fatima@angular6-starter-multi-module.com' }
        ]
    }

}
