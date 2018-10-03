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
       .directive('media',
                  function() {
                    return {
                      restrict: 'E',
                      templateUrl: "/ng-templates/media.html"
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
            title: "Perfect Match: A Simple Method for Learning Representations For Counterfactual Inference With Neural Networks.",
            authors: "Patrick Schwab, Lorenz Linhardt and Walter Karlen",
            year: "2018",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/pdf/1810.00656.pdf",
            code: "",
            bibtex: "https://arxiv.org/abs/1810.00656",
            image: ""
        },
        {
            title: "Granger-causal Attentive Mixtures of Experts: Learning Important Features with Neural Networks.",
            authors: "Patrick Schwab, Djordje Miladinovic and Walter Karlen",
            year: "2018",
            venue: "arXiv preprint",
            pdf: "https://arxiv.org/pdf/1802.02195.pdf",
            code: "https://github.com/d909b/attentive_mixtures_of_experts",
            bibtex: "http://arxiv.org/abs/1802.02195",
            image: ""
        },
        {
            title: "Not to Cry Wolf: Distantly Supervised Multitask Learning in Critical Care.",
            authors: "Patrick Schwab, Emanuela Keller, Carl Muroi, David J. Mack, Christian Strässle and Walter Karlen",
            year: "2018",
            venue: "International Conference on Machine Learning (ICML)",
            pdf: "https://arxiv.org/pdf/1802.05027.pdf",
            code: "https://github.com/d909b/DSMT-Nets",
            poster: "https://bitbucket.org/d909b/scientific-artifacts/raw/22b381c3fd3bd0d668f3488b343ef72d574005df/ICML18-poster.pdf",
            bibtex: "http://arxiv.org/abs/1802.05027",
            image: ""
        },
        {
            title: "Automated Extraction of Digital Biomarkers for Parkinson’s Disease.",
            authors: "Patrick Schwab, Mohammad A.K. Moghaddam and Walter Karlen",
            year: "2017",
            venue: "RECOMB/ISCB Conference on Regulatory and Systems Genomics with DREAM CHALLENGES",
            pdf: "https://www.researchgate.net/profile/Patrick_Schwab3/publication/324170800_Automated_Extraction_of_Digital_Biomarkers_for_Parkinson's_Disease/links/5ac3866e0f7e9bfc0460a3ff/Automated-Extraction-of-Digital-Biomarkers-for-Parkinsons-Disease.pdf?_sg%5B0%5D=4zzpC_PSm3nKP0vFgJoeHtQ0-Zh0MQHg2_bha-59KuZ8Q38ZKVnRsmGxNJ1sk1MLS_jW3NB6UTTVowNCnGwD2g.0rsOEE7ccdx93Vo0V4ivTnzfw14dIrrzBguuxnRmbdamQtGRNlg5bMZ6mkykaNNPPu0QACCxFKKjaUOOVQFQBg&_sg%5B1%5D=vW_k9AO76zfoVdcTRRcn7TsTl_aftkj5PEt23x5H9HIJGM43orN94tn4Zw0Ia5UpJGpr9PQ-6z8s3gQSHVbwtEJyqDs1LzmiYHeAEsnkg1ll.0rsOEE7ccdx93Vo0V4ivTnzfw14dIrrzBguuxnRmbdamQtGRNlg5bMZ6mkykaNNPPu0QACCxFKKjaUOOVQFQBg&_iepl=",
            code: "https://github.com/d909b/eth_dream_pd_subchallenge1",
            bibtex: "https://www.research-collection.ethz.ch/discover/export?format=bibtex&singleItemid=228322&handle=20.500.11850/224487",
            image: ""
        },
        {
            title: "Beat by Beat: Classifying Cardiac Arrhythmias with Recurrent Neural Networks.",
            authors: "Patrick Schwab, Gaetano Claudio Scebba, Jia Zhang, Marco Delai and Walter Karlen",
            year: "2017",
            venue: "Proceedings of Computing in Cardiology, 2017",
            pdf: "https://arxiv.org/pdf/1710.06319.pdf",
            code: "https://github.com/d909b/heart_rhythm_attentive_rnn",
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
            title: "I presented our work on distantly supervised multitask learning at the Machine Learning Lunch Seminar in Zurich, Switzerland.",
            date: "2018-10-02"
        },
        {
            title: "I gave a talk on reducing false alarms in critical care and diagnosing diseases with smartphone sensors at the annual meeting of the Swiss Society for Critical Care in Interlaken, Switzerland.",
            date: "2018-09-19"
        },
        {
            title: "I presented our work on reducing false alarms in critical care with deep learning at Philips Medical Systems in Böblingen, Germany.",
            date: "2018-07-19"
        },
        {
            title: "I presented our work on semi-supervised learning with distant supervision through multiple auxiliary tasks at the International Conference of Machine Learning (ICML) in Stockholm, Sweden.",
            date: "2018-07-12",
            link: "https://icml.cc/Conferences/2018/Schedule?day=2"
        },
        {
            title: "I represented the European Sleep Research Society (ESRS) at the International Workshop on Wearables in Sleep and Circadian Science in Baltimore, US.",
            date: "2018-06-02",
            link: "http://sleeploop.ch"
        },
        {
            title: "We released a revised version of our paper on attentive mixtures of experts on arXiv - now with more experimental data that shows strong results compared to several state-of-the-art baselines.",
            date: "2018-05-29",
            link: "http://arxiv.org/abs/1802.02195"
        },
        {
            title: "Our paper on reducing the false alarm rate in critical care with distant supervision was accepted to ICML 2018.",
            link: "http://arxiv.org/abs/1802.05027",
            date: "2018-05-11"
        },
        {
            title: "The ETH Entrepreneur Club honored my student Matas Pocevicius with an award for his thesis project - congrats!",
            date: "2018-05-11",
            link: "https://award.entrepreneur-club.org/"
        },
        {
            title: "I presented the results of our work on smarter biosignal monitoring at IBM Research Zurich, Switzerland.",
            link: "http://www.nfp75.ch/de/Events/Seiten/170122_nfp75_events_ICU.aspx",
            date: "2018-03-09"
        },
        {
            title: "We released our recent work on reducing the high false alarm rate in critical care using all available biosignal monitors and small amounts of labelled data.",
            link: "http://arxiv.org/abs/1802.05027",
            date: "2018-02-15"
        },
        {
            title: "We released our recent work on providing measurably accurate feature importance scores for neural networks - enabling exciting use cases in knowledge discovery and biomedical applications.",
            link: "http://arxiv.org/abs/1802.02195",
            date: "2018-02-08"
        },
        {
            title: "I presented our 2nd place solution in the DREAM challenge on identifying digital biomarkers from smartphone sensors for Parkinson's disease at the RECOMB/ISCB Conference on Regulatory and Systems Genomics in New York, USA.",
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
            title: "Learning Counterfactual Representations for Ventilation in Critical Care.",
            name: "Lorenz Linhardt, ETH Zurich",
            level: "MSc, with Prof. Buhmann and Prof. Karlen",
            date: "2018"
        },
        {
            title: "Intelligent Decision-Support for Diagnosis and Monitoring of Parkinson’s Disease.",
            name: "Matas Pocevicius, ETH Zurich",
            level: "MSc, with Prof. Karlen",
            date: "2018"
        },
        {
            title: "Battery-efficient Human Activity Recognition from Smartphone Sensor Data.",
            name: "Avik Mukhija, ETH Zurich",
            level: "BSc, with Prof. Hiliges and Prof. Karlen",
            date: "2017"
        },
        {
            title: "Unsupervised Discovery of Patterns in Human Mobility Behavior.",
            name: "Selin Olenik, Imperial College London",
            level: "Amgen Scholar, with Prof. Karlen",
            date: "2017"
        }
    ];

    $scope.awards = [
        {
            title: "GPU Grant.",
            venue: "Nvidia Corporation",
            date: "2018"
        },
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
    ];

    $scope.media_coverage = [
        {
            title: "Digital Has Got Your Back.",
            venue: "Neue Zürcher Zeitung (NZZ)",
            date: "Dec, 2017",
            link: "https://bytebucket.org/d909b/scientific-artifacts/raw/219f67c6c5fb9b8c93d628bd5d6632b4261c004e/nzz_4.12.2017.JPG"
        },
        {
            title: "Scientifica 2017: Playfully Fighting Low Back Pain.",
            venue: "ETH Zurich News",
            date: "Aug, 2017",
            link: "https://www.youtube.com/watch?v=N1Pk3586M0E"
        },
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