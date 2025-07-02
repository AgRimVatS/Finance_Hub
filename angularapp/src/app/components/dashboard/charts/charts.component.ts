// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { AdminDashService } from 'src/app/services/admin-dash.service';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })
// export class ChartsComponent implements OnInit {
//   @ViewChild('pieChart') pieChart: ElementRef;
//   @ViewChild('lineChart') lineChart: ElementRef;
//   @ViewChild('barChart') barChart: ElementRef;

//   applicationStatusData: any = { labels: [], datasets: [] };
//   monthlyApplicationData: any = { labels: [], datasets: [] };
//   enquiryStatusData: any = { labels: [], datasets: [] };
//   fullscreenChart: any = null;

//   constructor(private dashboardService: AdminDashService) {}

//   ngOnInit(): void {
//     this.dashboardService.getPlanApplicationStatus().subscribe({
//       next: (response) => {
//         console.log("DBUG getPlanAppStatus:: \n\n"+JSON.stringify(response));
//         this.applicationStatusData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//           }]
//         };
//       },
//       error: (error) => {
//         console.error('Error loading application status:', error);
//       }
//     });

//     this.dashboardService.getMonthlyApplicationTrends().subscribe({
//       next: (response) => {
//         //monthly application trends
//         console.log("DBUG getMonthlyAppTrends:: \n\n"+JSON.stringify(response));
//         this.monthlyApplicationData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             borderColor: '#36A2EB',
//             fill: false 
//           }]
//         };
//       },
//       error: (error) => {
//         console.error('Error loading monthly application trends:', error);
//       }
//     });

//     this.dashboardService.getEnquiryStatus().subscribe({
//       next: (response) => {
//         console.log("DBUG getEnqStatus:: \n\n"+JSON.stringify(response));
//         this.enquiryStatusData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             backgroundColor: ['#4CAF50', '#FF9800']
//           }]
//         };
//       },
//       error: (error) => {
//         console.error('Error loading enquiry status:', error);
//       }
//     });

//     // Add scroll color change detection
//     window.addEventListener('scroll', () => {
//       const container = document.querySelector('.container');
//       if (window.scrollY > 100) {
//         container?.classList.add('scrolled');
//       } else {
//         container?.classList.remove('scrolled');
//       }
//     });
//   }

//   openFullscreen(chartType: string) {
//     switch(chartType) {
//       case 'pie':
//         this.fullscreenChart = {
//           type: 'pie',
//           data: this.applicationStatusData.datasets[0].data,
//           labels: this.applicationStatusData.labels
//         };
//         break;
//       case 'line':
//         this.fullscreenChart = {
//           type: 'line',
//           data: this.monthlyApplicationData.datasets[0].data,
//           labels: this.monthlyApplicationData.labels
//         };
//         break;
//       case 'bar':
//         this.fullscreenChart = {
//           type: 'bar',
//           data: this.enquiryStatusData.datasets[0].data,
//           labels: this.enquiryStatusData.labels
//         };
//         break;
//     }
//   }

//   closeFullscreen() {
//     this.fullscreenChart = null;
//   }
// }




// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { AdminDashService } from 'src/app/services/admin-dash.service';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })
// export class ChartsComponent implements OnInit {
//   @ViewChild('pieChart') pieChart: ElementRef;
//   @ViewChild('lineChart') lineChart: ElementRef;
//   @ViewChild('barChart') barChart: ElementRef;

//   applicationStatusData: any = { labels: [], datasets: [] };
//   monthlyApplicationData: any = { labels: [], datasets: [] };
//   enquiryStatusData: any = { labels: [], datasets: [] };
//   fullscreenChart: any = null;

//   constructor(private dashboardService: AdminDashService) {}

//   ngOnInit(): void {
//     this.dashboardService.getPlanApplicationStatus().subscribe({
//       next: (response) => {
//         console.log("DBUG getPlanAppStatus:: \n\n"+JSON.stringify(response));
//         this.applicationStatusData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             label: 'Status'
//           }],
//           options: {
//             title: {
//               display: true,
//               text: 'Application Status'
//             }
//           }
//         };
//       },
//       error: (error) => {
//         console.error('Error loading application status:', error);
//       }
//     });

//     this.dashboardService.getMonthlyApplicationTrends().subscribe({
//       next: (response) => {
//         console.log("DBUG getMonthlyAppTrends:: \n\n"+JSON.stringify(response));
//         this.monthlyApplicationData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             borderColor: '#36A2EB',
//             fill: false,
//             label: 'Applications'
//           }],
//           options: {
//             title: {
//               display: true,
//               text: 'Monthly Application Trends'
//             },
//             scales: {
//               xAxes: [{
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Month'
//                 }
//               }],
//               yAxes: [{
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Number of Applications'
//                 }
//               }]
//             }
//           }
//         };
//       },
//       error: (error) => {
//         console.error('Error loading monthly application trends:', error);
//       }
//     });

//     this.dashboardService.getEnquiryStatus().subscribe({
//       next: (response) => {
//         console.log("DBUG getEnqStatus:: \n\n"+JSON.stringify(response));
//         this.enquiryStatusData = {
//           labels: Object.keys(response.data),
//           datasets: [{
//             data: Object.values(response.data),
//             backgroundColor: ['#4CAF50', '#FF9800'],
//             label: 'Enquiries'
//           }],
//           options: {
//             title: {
//               display: true,
//               text: 'Enquiry Status'
//             },
//             scales: {
//               xAxes: [{
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Enquiry Type'
//                 }
//               }],
//               yAxes: [{
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Number of Enquiries'
//                 }
//               }]
//             }
//           }
//         };
//       },
//       error: (error) => {
//         console.error('Error loading enquiry status:', error);
//       }
//     });

//     // Add scroll color change detection
//     window.addEventListener('scroll', () => {
//       const container = document.querySelector('.container');
//       if (window.scrollY > 100) {
//         container?.classList.add('scrolled');
//       } else {
//         container?.classList.remove('scrolled');
//       }
//     });
//   }

//   openFullscreen(chartType: string) {
//     switch(chartType) {
//       case 'pie':
//         this.fullscreenChart = {
//           type: 'pie',
//           data: this.applicationStatusData.datasets[0].data,
//           labels: this.applicationStatusData.labels
//         };
//         break;
//       case 'line':
//         this.fullscreenChart = {
//           type: 'line',
//           data: this.monthlyApplicationData.datasets[0].data,
//           labels: this.monthlyApplicationData.labels
//         };
//         break;
//       case 'bar':
//         this.fullscreenChart = {
//           type: 'bar',
//           data: this.enquiryStatusData.datasets[0].data,
//           labels: this.enquiryStatusData.labels
//         };
//         break;
//     }
//   }

//   closeFullscreen() {
//     this.fullscreenChart = null;
//   }
// }



import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminDashService } from 'src/app/services/admin-dash.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild('pieChart') pieChart: ElementRef;
  @ViewChild('lineChart') lineChart: ElementRef;
  @ViewChild('barChart') barChart: ElementRef;

  applicationStatusData: any = { labels: [], datasets: [] };
  monthlyApplicationData: any = { labels: [], datasets: [] };
  enquiryStatusData: any = { labels: [], datasets: [] };
  fullscreenChart: any = null;

  constructor(private dashboardService: AdminDashService) {}

  ngOnInit(): void {
    this.dashboardService.getPlanApplicationStatus().subscribe({
      next: (response) => {
        console.log("DBUG getPlanAppStatus:: \n\n"+JSON.stringify(response));
        this.applicationStatusData = {
          labels: Object.keys(response.data),
          datasets: [{
            data: Object.values(response.data),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            label: 'Status'
          }],
          options: {
            title: {
              display: true,
              text: 'Application Status'
            },
            legend: {
              display: true,
              position: 'top'
            }
          }
        };
      },
      error: (error) => {
        console.error('Error loading application status:', error);
      }
    });

    this.dashboardService.getMonthlyApplicationTrends().subscribe({
      next: (response) => {
        console.log("DBUG getMonthlyAppTrends:: \n\n"+JSON.stringify(response));
        this.monthlyApplicationData = {
          labels: Object.keys(response.data),
          datasets: [{
            data: Object.values(response.data),
            borderColor: '#36A2EB',
            fill: false,
            label: 'Applications'
          }],
          options: {
            title: {
              display: true,
              text: 'Monthly Application Trends'
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Applications'
                }
              }]
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        };
      },
      error: (error) => {
        console.error('Error loading monthly application trends:', error);
      }
    });

    this.dashboardService.getEnquiryStatus().subscribe({
      next: (response) => {
        console.log("DBUG getEnqStatus:: \n\n"+JSON.stringify(response));
        this.enquiryStatusData = {
          labels: Object.keys(response.data),
          datasets: [{
            data: Object.values(response.data),
            backgroundColor: ['#4CAF50', '#FF9800'],
            label: 'Enquiries'
          }],
          options: {
            title: {
              display: true,
              text: 'Enquiry Status'
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Enquiry Type'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Enquiries'
                }
              }]
            },
            legend: {
              display: true,
              position: 'top'
            }
          }
        };
      },
      error: (error) => {
        console.error('Error loading enquiry status:', error);
      }
    });

    // Add scroll color change detection
    window.addEventListener('scroll', () => {
      const container = document.querySelector('.container');
      if (window.scrollY > 100) {
        container?.classList.add('scrolled');
      } else {
        container?.classList.remove('scrolled');
      }
    });
  }

  openFullscreen(chartType: string) {
    switch(chartType) {
      case 'pie':
        this.fullscreenChart = {
          type: 'pie',
          data: this.applicationStatusData.datasets[0].data,
          labels: this.applicationStatusData.labels,
          options: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        };
        break;
      case 'line':
        this.fullscreenChart = {
          type: 'line',
          data: this.monthlyApplicationData.datasets[0].data,
          labels: this.monthlyApplicationData.labels,
          options: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        };
        break;
      case 'bar':
        this.fullscreenChart = {
          type: 'bar',
          data: this.enquiryStatusData.datasets[0].data,
          labels: this.enquiryStatusData.labels,
          options: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        };
        break;
    }
  }

  closeFullscreen() {
    this.fullscreenChart = null;
  }
}
