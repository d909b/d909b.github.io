//<![CDATA[
angular.module('components', [])
       .directive('publication',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/publication.html"
                    };
                  })
       .directive('news',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/news.html"
                    };
                  })
       .directive('supervision',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/supervision.html"
                    };
                  })
       .directive('award',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/award.html"
                    };
                  })
       .config(function($interpolateProvider){
    		$interpolateProvider.startSymbol('{a{').endSymbol('}a}');
		});

var app = angular.module('app', ['components'])

// CREDITS: http://stackoverflow.com/questions/16630471/how-can-i-invoke-encodeuricomponent-from-angularjs-template
app.filter('encodeURIComponent', function() {
    return function(arg) {
      return window.encodeURIComponent(arg).replace(/%.{2}/g, "_");
    };
});

app.filter('highlight', function($sce) {
    return function (text, search) {
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted-text">$&</span>'));
    };
});

app.controller('AppController', function($scope){

    $scope.publications = [
        {
            title: "Beat by Beat: Classifying Cardiac Arrhythmias with Recurrent Neural Networks.",
            authors: "Patrick Schwab, Gaetano Claudio Scebba, Jia Zhang, Marco Delai and Walter Karlen",
            year: "2017",
            venue: "Proceedings of Computing in Cardiology, 2017",
            pdf: "https://arxiv.org/pdf/1710.06319.pdf",
            code: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/cinc-code-and-models.zip",
            bibtex: "https://www.research-collection.ethz.ch/discover/export?format=bibtex&singleItemid=169107&handle=20.500.11850/170134",
            image: "img/cinc17.png"
        },
        {
            title: "Capturing the Essence: Towards the Automated Generation of Transparent Behavior Models.",
            authors: "Patrick Schwab and Helmut Hlavacs",
            year: "2015",
            venue: "Proceedings of The Eleventh AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment, 184-190, S.I.: AAAI, 2015.",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/aiide2015.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/aiide2015-poster.pdf",
            bibtex: "https://www.research-collection.ethz.ch/discover/export?format=bibtex&singleItemid=169420&handle=20.500.11850/170140",
            image: "img/aiide15.png"
        },
        {
            title: "PALAIS: A 3D Simulation Environment for Artificial Intelligence in Games.",
            authors: "Patrick Schwab and Helmut Hlavacs",
            year: "2015",
            venue: "Proceedings of the AISB 2015 Symposium on AI and Games, 18-21, Canterbury: AISB, 2015.",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/AISB2015.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/AISB2015-poster.pdf",
            code: "https://github.com/palais-ai/",
            bibtex: "https://www.research-collection.ethz.ch/discover/export?format=bibtex&singleItemid=169054&handle=20.500.11850/170141",
            image: "img/aisb15.png"
        },
        {
            title: "A Unified Framework for Retrieving Diverse Social Images.",
            authors: "Maia Zaharieva and Patrick Schwab",
            year: "2014",
            venue: "CEUR Workshop Proceedings, 1263, Aachen: RWTH, 2014.",
            pdf: "https://bitbucket.org/d909b/scientific-artifacts/raw/8f112743125342b8523ad9344a4f00905da74591/MediaEval2014.pdf",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/81b4ad5fca44928163b4b01ff5eeae6eef2ddc13/MediaEval2014-poster.pdf",
            code: "https://bitbucket.org/d909b/diverse-social-image-search",
            bibtex: "https://www.research-collection.ethz.ch/discover/export?format=bibtex&singleItemid=169421&handle=20.500.11850/170143",
            image: "img/mediaeval14.png"
        },
    ];

    $scope.news = [
        {
            title: "I will present our 2nd place solution in the DREAM challenge on identifying digital biomarkers from smartphone sensors for Parkinson's disease at the RECOMB/ISCB Conference on Regulatory and Systems Genomics in New York, USA.",
            link: "https://www.iscb.org/recomb-regsysgen2017-program/recomb-regsysgen2017-agendas",
            date: "2017-11-21"
        },
        {
            title: "I gave a keynote speech on 'The AI Revolution in Health Care' at AIshow in Madrid, Spain.",
            link: "https://the-aishow.com/agenda-aishow/",
            date: "2017-10-25"
        },
        {
            title: "I presented our work on 'Smarter Monitoring in the Intensive Care Unit' at the NeuroMedTech Seminar, University Hospital Zurich in Zurich, Switzerland.",
            date: "2017-10-18"
        },
        {
            title: "I presented our paper on detecting heart arrhythmias with mobile event recorders at Computing in Cardiology in Rennes, France.",
            link: "https://www.cinc2017.org/scientific-program",
            date: "2017-09-27"
        },
        {
            title: "We presented our work on smartphone apps for personalised management of low back pain at Scientifica in Zurich, Switzerland.",
            link: "http://www.mhsl.hest.ethz.ch/mhsl-newschannel/2017/09/mhsl-at-scientifica-2017.html",
            date: "2017-09-01"
        },
        {
            title: "We released a teaser video for our upcoming booth at Scientifica on using smartphones and big data to better understand low back pain.",
            link: "https://twitter.com/ETH/status/900357105428951041",
            date: "2017-08-23"
        },
        {
            title: "I presented our research project on personalised management of low back pain at the kick-off event of the Swiss National Research Program 75 'Big Data' in Berne, Switzerland.",
            link: "http://www.nfp75.ch/en/Pages/Home.aspx",
            date: "2017-05-09"
        }
    ];

    $scope.supervision = [
        {
            title: "Battery-efficient Human Activity Recognition from Smartphone Sensor Data.",
            name: "Avik Mukhija, ETH Zurich",
            level: "BSc, with Prof. Hiliges and Prof. Karlen",
            date: "2017"
        },
        {
            title: "Unsupervised Discovery of Patterns in Human Mobility Behavior.",
            name: "Selin Olenik, Imperial College London",
            level: "Intern, with Prof. Karlen",
            date: "2017"
        }
    ];

    $scope.awards = [
        {
            title: "2nd Place Parkinson’s Disease Digital Biomarker Challenge.",
            venue: "DREAM Challenges",
            date: "2017"
        },
        {
            title: "Best of the Best Award.",
            venue: "Faculty of Computer Science, University of Vienna, Austria",
            date: "2016"
        },
        {
            title: "NaturTalente High-Potential Program.",
            venue: "University of Vienna, Austria",
            date: "2015"
        },
        {
            title: "Five Honorary Scholarships.",
            venue: "Funded by the Austrian Government",
            date: "2011 - 2015"
        }
    ]
});

$(document).ready(function() {
    $('.collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
        e.preventDefault();
    });

    $('[data-toggle="collapse"]').on('click', function(e) {
        e.preventDefault();
        $($(this).data('target')).toggleClass('in');
    });
});
//]]>