// Pinpoint Sample App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'pinpoint' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pinpoint', ['ionic',
    'ngMessages',
    'pinpoint.service.auth',
    'pinpoint.menu',
    'pinpoint.login',
    'pinpoint.confirm',
    'pinpoint.about',
	'pinpoint.analytics',
	'pinpoint.campaigns',
	'pinpoint.segments',
	'pinpoint.overview',
	'pinpoint.usage',
	'pinpoint.revenue',
	'pinpoint.demographics',
	'pinpoint.events',
	'pinpoint.campaigndetail',
  	'pinpoint.campaignmessage',
 	'pinpoint.campaignreview',
 	'pinpoint.campaignschedule',
	'pinpoint.campaignsegment',
	'pinpoint.createsegment',
	'pinpoint.previoussegment',
	'pinpoint.campaigninfo',
    'pinpoint.silentnotification',
	'pinpoint.campaignanalytics',
	
])

.constant('$ionicLoadingConfig', {
    template: '<ion-spinner icon="bubbles" class="spinner-royal"></ion-spinner>'
})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'Login/Login.html',
        controller: 'LoginCtrl'
    })

    .state('confirm', {
        url: '/confirm',
        templateUrl: 'Confirm/Confirm.html',
        controller: 'ConfirmCtrl'
    })

    .state('app', {
        url: '/app',
        templateUrl: 'Menu/menu.html',
        controller: 'MenuCtrl'
    })

	.state('app.analytics', {
        url: '/analytics',
        views: {
			'menuContent': {
			templateUrl: 'Analytics/analytics.html',
			controller: 'AnalyticsCtrl'
			}
		},
       authenticate: true
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'About/About.html',
                controller: 'AboutCtrl'
            }
        },
       authenticate: true
    })
	
    .state('app.segments', {
        url: '/segments',
        views: {
            'menuContent': {
                templateUrl: 'Segments/segments.html',
                controller: 'SegmentsCtrl'
            }
        },
       authenticate: true
    })
	
    .state('app.campaigns', {
        url: '/campaigns',
        views: {
            'menuContent': {
                templateUrl: 'Campaigns/campaigns.html',
                controller: 'CampaignsCtrl'
            }
        },
       authenticate: true
    })
    
    .state('app.overview', {
        url: '/overview',
        views: {
            'menuContent': {
                templateUrl: 'Overview/overview.html',
                controller: 'OverviewCtrl'
            }
        },
       authenticate: true
    })
    
    .state('app.usage', {
        url: '/usage',
        views: {
            'menuContent': {
                templateUrl: 'Usage/usage.html',
                controller: 'UsageCtrl'
            }
        },
       authenticate: true
    })
    
    .state('app.revenue', {
        url: '/revenue',
        views: {
            'menuContent': {
                templateUrl: 'Revenue/revenue.html',
                controller: 'RevenueCtrl'
            }
        },
       authenticate: true
    })
    
    .state('app.demographics', {
        url: '/demographics',
        views: {
            'menuContent': {
                templateUrl: 'Demographics/demographics.html',
                controller: 'DemographicsCtrl'
            }
        },
       authenticate: true
    })
	
 	.state('app.campaigndetail', {
        url: '/campaigndetail',
        views: {
            'menuContent': {
                templateUrl: 'CampaignDetail/CampaignDetail.html',
                controller: 'CampaignDetailCtrl'
            }
        },
       authenticate: true
    })
	
  	.state('app.campaignmessage', {
        url: '/campaignmessage',
        views: {
            'menuContent': {
                templateUrl: 'CampaignMessage/CampaignMessage.html',
                controller: 'CampaignMessageCtrl'
            }
        },
       authenticate: true
    })
	
	.state('app.campaignreview', {
        url: '/campaignreview',
        views: {
            'menuContent': {
                templateUrl: 'CampaignReview/CampaignReview.html',
                controller: 'CampaignReviewCtrl'
            }
        },
       authenticate: true
    })
 	
	.state('app.campaignschedule', {
        url: '/campaignschedule',
        views: {
            'menuContent': {
                templateUrl: 'CampaignSchedule/CampaignSchedule.html',
                controller: 'CampaignScheduleCtrl'
            }
        },
       authenticate: true
    })
	
	.state('app.campaignsegment', {
        url: '/campaignsegment',
        views: {
            'menuContent': {
                templateUrl: 'CampaignSegment/CampaignSegment.html',
                controller: 'CampaignSegmentCtrl'
            }
        },
       authenticate: true
    })
    	
    .state('app.createsegment', {
        url: '/createsegment',
        views: {
            'menuContent': {
                templateUrl: 'CreateSegment/CreateSegment.html',
                controller: 'CreateSegmentCtrl'
            }
        },
       authenticate: true
    })
    
	.state('app.previoussegment', {
        url: '/previoussegment',
        views: {
            'menuContent': {
                templateUrl: 'PreviousSegment/PreviousSegment.html',
                controller: 'PreviousSegmentCtrl'
            }
        },
       authenticate: true
    })
	
    .state('app.campaigninfo', {
        url: '/campaigninfo',
        views: {
            'menuContent': {
                templateUrl: 'CampaignInfo/CampaignInfo.html',
                controller: 'CampaignInfoCtrl'
            }
        },
       authenticate: true
    })
	
	.state('app.campaignanalytics', {
        url: '/campaignanalytics',
        views: {
            'menuContent': {
                templateUrl: 'CampaignAnalytics/CampaignAnalytics.html',
                controller: 'CampaignAnalyticsCtrl'
            }
        },
       authenticate: true
    })
	
    .state('app.silentnotification', {
        url: '/silentnotification',
        views: {
            'menuContent': {
                templateUrl: 'SilentNotification/SilentNotification.html',
                controller: 'SilentNotificationCtrl'
            }
        },
       authenticate: true
    })
	
    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'Events/events.html',
                controller: 'EventsCtrl'
            }
        },
       authenticate: true
    });
	

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

})

.run(function($rootScope, $state, authService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate) {
            authService.isAuthenticated().then(function(authenticated) {
                if (!authenticated) {
                    // User isn’t authenticated
                    $state.transitionTo("signin");
                    event.preventDefault();
                }
            }).catch(function(result) {
                // User isn’t authenticated
                $state.transitionTo("signin");
                event.preventDefault();
            });
        }
    });
});
